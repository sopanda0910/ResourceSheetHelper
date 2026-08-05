# Developer guide

Written for someone who knows a bit of JavaScript but has not used React
before. Read this once end to end, then keep the "How do I…" section open
while you work.

If you only want to add or fix a resource, you may not need code at all —
see [Do you actually need to write code?](#do-you-actually-need-to-write-code)

---

## 1. What this app is

A front-desk tool for The Samaritan Inn in McKinney, Texas. A volunteer ticks
boxes about the person in front of them, and the app produces a printable PDF
listing local places that can help — with phone numbers, what to say when they
call, what to bring, and a map.

Two things follow from that, and they should guide every change you make:

1. **The people reading the output are stressed, tired, and sometimes in
   danger.** Plain words beat clever words. A wrong phone number is worse than
   a missing one.
2. **The people using the screen are volunteers of every age**, often on a
   shared machine. Big buttons, obvious next step, no jargon.

### It has no server

There is no backend, no database, no login. Everything runs in the browser.
The finished app in `dist/` is just files — it works from a web host, a USB
stick, or by opening `dist/index.html` directly.

That is why staff edits are saved in the browser's local storage rather than a
database, and why the road map data is baked into a file instead of fetched.

---

## 2. Running it

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install     # first time only
npm run dev     # start the app at http://localhost:5173
npm test        # run the tests
npm run build   # produce the dist/ folder for deployment
```

`npm run dev` watches your files. Save a change and the browser updates
straight away — you almost never need to refresh.

---

## 3. React in ten minutes

You only need a few ideas to work in this codebase.

### A component is a function that returns markup

```jsx
function Greeting() {
  return <h1>Hello</h1>
}
```

That `<h1>` inside JavaScript is **JSX**. It is not HTML — it compiles into
JavaScript function calls. Two differences bite everyone at first:

- `class` is written `className` (because `class` is a reserved word in JS)
- `for` on a label is written `htmlFor`

### Curly braces drop JavaScript into markup

```jsx
function Greeting({ name }) {
  return <h1>Hello {name}</h1>
}
```

`{ name }` in the parameter list is destructuring — it pulls `name` out of the
object of **props** the parent passed in. Props flow one way: parent to child.

Real example, from `App.jsx`:

```jsx
<ChoiceGrid
  options={localizedOptions('needs', NEEDS)}
  selected={needs}
  onToggle={toggle(needs, setNeeds)}
  name={T('qNeeds')}
/>
```

Four props. `ChoiceGrid` receives them as one object and reads them by name.

### State is memory that redraws the screen

```jsx
const [needs, setNeeds] = useState([])
```

`useState` returns two things: the current value, and a function to change it.
Calling `setNeeds(...)` tells React "this changed, redraw." **This is the only
way to update the screen.**

```jsx
// WRONG — React has no idea anything happened, nothing redraws
needs.push('food')

// RIGHT — hand it a brand new array
setNeeds([...needs, 'food'])
```

Never modify state in place. Always create a new array or object. That is why
you see `[...list, id]` and `{ ...draft, name: 'x' }` all over this codebase —
the `...` spread copies the old thing into a new one.

### Conditional rendering

```jsx
{nothingPicked && <p>Tick a box first.</p>}     // show only if true
{isOpen ? <Panel /> : <Button />}                // pick one of two
```

### Lists need a key

```jsx
{options.map((opt) => (
  <button key={opt.id}>{opt.label}</button>
))}
```

`key` must be unique and stable. React uses it to tell items apart when
redrawing. Leaving it out causes strange bugs when the list changes order.

### useMemo

```jsx
const pool = useMemo(() => effectiveResources(...), [libraryVersion])
```

"Remember this result; only work it out again when something in the list at
the end changes." It is a speed optimisation. If you delete every `useMemo`
in this project it still works correctly, just does more work per keystroke.
Do not reach for it unless something is actually slow.

### That is genuinely most of it

There are no classes, no Redux, no router, no hooks beyond `useState`,
`useMemo`, and one `useRef`. If you find yourself wanting something fancier,
you probably do not need it.

---

## 4. The files

```
src/
  main.jsx            Starts the app. You will rarely touch this.
  App.jsx             The form and the results screen.
  AdminPanel.jsx      Staff Tools — the add/edit screen.
  resources.js        THE DATA. Every place, and the matching rules.
  resources.es.js     Spanish wording for those places.
  i18n.js             All UI text in both languages, and the language helpers.
  customResources.js  Saving/loading staff edits in the browser.
  pdf.js              Draws the printed sheet, including the map.
  roads.js            Generated map geometry. Never edit by hand.
  styles.css          All the styling.

scripts/
  fetch-roads.mjs     Regenerates roads.js from OpenStreetMap.
  test-staff-tools.mjs  The test suite (npm test).
```

### How data flows

```
resources.js  ──┐
                ├──►  effectiveResources()  ──►  matchResources()  ──►  App shows a list
staff edits  ───┘     (customResources.js)      (resources.js)          │
(local storage)                                                          ▼
                                                                    buildResourceSheet()
                                                                       (pdf.js)
                                                                          │
                                                                          ▼
                                                                      the PDF
```

The important idea: **`resources.js` holds facts, `resources.es.js` and
`i18n.js` hold words.** A phone number exists in exactly one place. Translating
never risks changing which resources match, because matching uses ids
(`'food'`, `'shelter'`) that are never translated.

---

## 5. How do I…

### Do you actually need to write code?

Adding a place, fixing a phone number, changing wording, hiding a place you
never use — **all of that can be done in the app itself**, through Staff Tools
at the bottom of the page. See the README.

Use Staff Tools when: it is a one-off, or non-technical staff need to do it.
Edit `resources.js` when: you want the change on every computer permanently.

Staff Tools has a **Copy as code** button that prints an entry in exactly the
format `resources.js` wants, so the usual workflow is: staff add it in the
app → they send you the code → you paste it in.

### Add a resource permanently

Open `src/resources.js`, copy an existing entry in the `RESOURCES` array, and
change the fields. The only required ones are `id`, `name`, `category`,
`phone`, and at least one entry in `needs` or `situations`.

```js
{
  id: 'allen-outreach',            // unique, lowercase, no spaces
  name: 'Allen Community Outreach',
  category: 'Food & bills',        // groups it on the sheet
  what: 'Food pantry and help with bills.',
  address: '801 E Main St, Allen, TX 75002',
  coords: { lat: 33.1031, lon: -96.6706 },   // map pin; optional
  phone: '(972) 727-9131',
  hours: 'Mon-Thu 9:00 AM - 4:00 PM',
  say: 'I need help with food and my electric bill.',
  steps: ['Call first to ask what to bring.', 'Go during open hours.'],
  bring: ['Photo ID', 'Your bill'],
  notes: '',
  needs: ['food', 'rentutility'],  // WHICH CHECKBOXES SHOW THIS
  situations: [],
  priority: 3,                     // lower numbers print first
}
```

**A resource with empty `needs` and empty `situations` will never appear on
anyone's sheet.** That is the single most common mistake.

To get `coords`, search the address on
[openstreetmap.org](https://www.openstreetmap.org), right-click the spot, and
choose "Show address" — or use the **Find on map** button in Staff Tools.

Then add the Spanish in `src/resources.es.js` under the same `id`. If you
skip it, the sheet still works — that entry just prints in English with a
note. `npm test` will tell you which entries are missing Spanish.

### Add a new checkbox to the form

Three steps:

1. Add it to `NEEDS` (or `SITUATIONS`) in `src/resources.js`:
   ```js
   { id: 'childcare', label: 'Childcare' },
   ```
2. Add the Spanish label in `src/i18n.js` under `LABELS.es.needs`.
3. Put `'childcare'` in the `needs` array of every resource it should show.

That is all. Nothing else needs to change — `App.jsx` builds the checkboxes
from those lists automatically.

### Change wording on the screen

All screen text lives in `STRINGS` in `src/i18n.js`, with an `en` and an `es`
copy. Change both. `npm test` fails if a key exists in English but not Spanish.

In the markup, text is pulled in with `T('someKey')`.

### Add a third language

The structure already supports it:

1. Add `{ id: 'vi', label: 'Tiếng Việt' }` to `LANGUAGES` in `i18n.js`.
2. Add a `vi:` block to `STRINGS` alongside `en` and `es`.
3. Add `vi` to `LABELS` for the option labels and categories.
4. Create `src/resources.vi.js` and wire it into `localizeResource`.

One caveat: the PDF uses jsPDF's built-in Helvetica, which covers Western
European accents but **not** Vietnamese, Arabic, Chinese, or Cyrillic. Those
need a custom font embedded. Spanish works because á, é, ñ, and ¿ are all in
the standard character set.

### Change how the PDF looks

`src/pdf.js`. Read the comment at the top of the file first — the layout has
one rule that must not be broken:

> **Measure the whole card first, decide the page break, then draw.**

Every card's height is computed by `layoutCard` before anything is drawn. If
your drawing code puts down more height than `layoutCard` reserved, the next
card overlaps it. There is a guard that warns in the browser console when this
happens — if you see `drew 303pt but reserved 301pt`, that is the bug.

Font sizes and line heights live in one object called `T` near the top. Change
them there, not inline, so measuring and drawing can never disagree.

### Change the map

Also `src/pdf.js`, in `drawMap`. Road geometry comes from `src/roads.js`,
which is generated — do not hand-edit it. To change the covered area, edit
`BBOX` in `scripts/fetch-roads.mjs` and run `npm run fetch-roads`.

Watch out for one thing: **on screen, y grows downward.** An angle of 218°
points *up*-left, not down-left. That has already caused one bug in this file.

---

## 6. Testing

```bash
npm test
```

44 checks covering the storage layer, staff edits, eligibility filtering,
validation, damaged-storage recovery, PDF generation, and Spanish coverage.
Add to `scripts/test-staff-tools.mjs` when you add a feature — it needs no
framework, just `check('what it should do', someCondition)`.

The Spanish tests are the useful kind: they will fail if you add a resource,
a checkbox, or a UI string and forget the Spanish. Trust them.

### Checking the PDF by eye

The tests prove the PDF *builds*; they cannot tell you it *looks* right. Run
the app, tick some boxes, and download it. Check both languages, and check a
case with many resources so you see a page break.

---

## 7. Things that will trip you up

**Editing state directly.** `arr.push(x)` will not redraw. Use
`setArr([...arr, x])`.

**Forgetting `key` in a `.map`.** Works until the list reorders, then breaks
oddly.

**Adding a resource with no `needs` and no `situations`.** It will never show
up and nothing will warn you in `resources.js`. (Staff Tools *does* catch this.)

**Translating an id.** `needs: ['food']` is a machine value. Never translate
what is inside those arrays — only labels get translated.

**Changing font sizes inline in `pdf.js`.** Measuring and drawing will disagree
and cards will overlap. Change the `T` object instead.

**Assuming staff edits are shared.** They live in one browser on one computer.

---

## 8. Where the data came from

`SOURCES.md` records where every phone number and address was verified, which
entries are least certain, and what was deliberately left out and why.

**If you add a resource, add its source there too.** The whole value of this
tool rests on the numbers being right, and future-you will want to know
whether something came from an official site or a directory that might be
stale.

---

## 9. Known gaps

Honest list, if you are looking for something worth doing:

- **Six categories have only one resource.** If that one place says no, the
  client has nothing. More depth per category is the highest-value work here.
- **Eight entries say "call for hours"** — including The Samaritan Inn's own
  intake times. Fixing that one needs a colleague, not code.
- **The Spanish has not been reviewed by a native speaker.** It should be
  before real use, especially the domestic-violence wording.
- **A single referral still costs 2 pages** because the map and emergency
  block take a full page. A one-page "wallet card" output would be genuinely
  useful for someone with nowhere to keep paperwork.
- **The map is PDF-only** — it does not appear in the on-screen preview.
- **Per-resource "verified on" dates.** The footer claims one date for
  everything, which stops being true as soon as staff edit an entry.
