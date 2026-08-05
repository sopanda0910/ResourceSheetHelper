# Resource Sheet Maker — The Samaritan Inn

A small web tool for front-desk staff and volunteers. You check a few boxes
about the person in front of you, and it makes a printable PDF listing the
local places that can actually help them, with phone numbers, addresses,
hours, and a directions link.

The sheet prints in **English or Spanish** — it is the first question on the
form.

Everything runs in the browser. Nothing typed about a client is saved or sent
anywhere.

> **Working on the code?** Start with **[GUIDE.md](GUIDE.md)** — a walkthrough
> written for someone who has not used React before.

## Running it

You need [Node.js](https://nodejs.org) installed (version 18 or newer).

```bash
npm install     # only the first time
npm run dev     # opens http://localhost:5173
```

To make a version you can put on a website or a USB stick:

```bash
npm run build   # writes the finished site into dist/
```

The `dist/` folder is plain static files. It works from any web host, or
straight off the hard drive by opening `dist/index.html`.

## Staff Tools — changing the list without touching code

There is a link at the bottom of every page: **"Staff Tools — add or edit the
places on this list."** From there you can:

- **Add a place** that is not in the list yet.
- **Edit any place**, including the ones that came with the app — wording,
  phone, hours, steps, what to bring, who it serves.
- **Hide** a place you never refer people to, and bring it back later.
- **Undo edits** on a built-in place to restore the original wording.
- **Find on map** — type a street address and it looks up the map pin for you.

The staff code is `saminn`. Change it in
[`src/customResources.js`](src/customResources.js) (`STAFF_CODE`).

> The code is a speed bump, not security. Anyone who knows how can get past it.
> That is fine — everything stored there is public information about local
> charities, and **nothing about any client is ever saved**.

### Important: changes stay on one computer

There is no server behind this app, so anything added or edited through Staff
Tools is saved in **that browser, on that computer**. Another front desk
machine will not see it, and clearing browsing data erases it.

Three ways to deal with that:

| You want to… | Use |
| --- | --- |
| Move changes to another computer | **Save changes to a file**, then **Load changes from a file** there |
| Keep a backup | **Save changes to a file** and keep the file somewhere safe |
| Make it permanent for everyone | **Copy as code**, and give that to whoever looks after the code |

"Copy as code" prints entries in exactly the format `src/resources.js` uses.
Pasting them into the `RESOURCES` list makes them part of the app itself, so
every computer gets them and no one has to import anything.

## How to change the resource list

**You only need to edit one file: [`src/resources.js`](src/resources.js).**

Each place is one block that looks like this:

```js
{
  id: 'cfp-mckinney',                 // any short unique name
  name: 'Community Food Pantry of McKinney',
  category: 'Food',                   // groups it on the printed sheet
  what: 'Free groceries and personal hygiene items...',
  address: '307 Smith St., McKinney, TX 75069',
  coords: { lat: 33.203415, lon: -96.613434 },   // pin on the map
  phone: '(972) 547-4404',
  hours: 'Mon-Wed 11:00 AM - 3:30 PM...',

  // The exact words to use. Printed in a box so it can be read aloud.
  say: 'I need food for my household. What do I need to do to shop today?',

  // Numbered instructions, in the order they should happen.
  steps: [
    'Go during open hours. Thursday stays open until 6:30 PM...',
    'Check in at the front desk and tell them it is your first visit.',
  ],

  // Bullet list of what to physically carry with them.
  bring: ['Photo ID', 'Proof of your address if you have it'],

  // Optional. Only add this if the place turns people away based on where
  // they live -- it removes them from the sheet when they would not qualify.
  serves: {
    collinOnly: true,                 // must live in Collin County
    excludeCities: ['plano', 'wylie'],// ids from RESIDENCES
    area: 'Northern Collin County only - not Plano or Wylie',  // shown to staff
  },

  notes: '',
  needs: ['food'],                    // which checkboxes show this place
  situations: [],
  priority: 3,                        // lower numbers print first
}
```

`say`, `steps`, and `bring` are all optional — leave any of them off and that
section simply does not print.

### Adding coordinates for a new place

`coords` only drives the map pin and the "about 1.2 miles southwest" line. To
find them, search the address on [openstreetmap.org](https://www.openstreetmap.org),
right-click the spot, and choose "Show address" — or just leave `coords` off.
A resource with no `coords` still prints in full; it just gets no map pin.

- `needs` and `situations` control when a place shows up. The ids come from
  the `NEEDS` and `SITUATIONS` lists at the top of the same file. A place is
  printed if it matches **any** box that was checked.
- To add a new checkbox to the form, add it to `NEEDS` or `SITUATIONS`, then
  put its id on whichever resources should match it.
- `EMERGENCY` at the top of the file is the 911 / 988 / 211 block that prints
  on every single sheet.
- Change `VERIFIED_ON` whenever someone re-checks the phone numbers. That date
  prints in the footer of every sheet.

## Keeping the information right

Phone numbers and hours were checked on **August 5, 2026**, against each
organization's own website where one existed. See [SOURCES.md](SOURCES.md) for
where each entry came from.

Hours at small nonprofits change constantly. Every printed sheet says "Please
call before you go" for that reason. It is worth having someone re-verify the
list every few months and bump `VERIFIED_ON`.

## Notes on the design

A few choices were made deliberately, because of who uses this:

- **Big type and big buttons.** Base font is 18px and every tappable thing is
  at least 66px tall, for staff of all ages on a shared front-desk machine.
- **Plain words.** The form says "A place to stay" rather than "Housing
  Services", and the printed sheet is written at roughly a 6th grade reading
  level.
- **The form asks where the person lives.** Several places serve only certain
  towns, so without this the sheet can send someone across the county to be
  turned away. When something is dropped, the results screen says which and
  why, so staff can override by answering "not sure".
- **"A doctor" and "a dentist" are separate boxes.** They were one box, which
  returned only primary-care clinics — so anyone with a bad tooth got a sheet
  with no dentist on it.
- **A safety warning for domestic violence.** If "Unsafe at home / abuse" is
  checked, both the screen and the PDF warn that carrying the paper home could
  itself be dangerous. This is standard practice for DV services.
- **No invented directions.** The sheet gives the full address plus a link
  that opens real turn-by-turn directions from The Samaritan Inn. Written-out
  street directions are not included, because guessing them would be worse
  than useless for someone standing at a bus stop.
- **The map draws real streets.** Road geometry comes from OpenStreetMap and
  is baked into `src/roads.js`, so nothing is fetched at print time. Freeways
  carry route shields (US 75, DNT), pin numbers match the numbered list, a red
  star marks the Inn, and dashed rings show distance from it. It is for
  orientation — "the clinic is south of here, past US 75" — not for
  turn-by-turn navigation, and it says so on the sheet.
- **The map is on the PDF, not the on-screen preview.** Staff see the matched
  list on screen; the map appears when they download or print. If you want it
  on screen too, that means porting `drawMap` in `src/pdf.js` to SVG.
- **Every card is measured before it is drawn.** `layoutCard` computes the
  full height first; the page break happens before anything is put on the
  page. This is why a card is never split and why the rule beside it can never
  streak across a page. `buildResourceSheet` also warns to the console if a
  card ever draws taller than it reserved, which is the failure that produces
  overlapping text.
- **Nothing is stored.** No database, no analytics, no network calls. Client
  names never leave the machine.

## Files

| File | What it is |
| --- | --- |
| `src/resources.js` | The resource list. **Edit this one.** |
| `src/App.jsx` | The form and the on-screen preview |
| `src/AdminPanel.jsx` | Staff Tools — the add/edit screen |
| `src/customResources.js` | Saving, loading, and checking staff changes |
| `scripts/test-staff-tools.mjs` | Tests for the above (`npm test`) |
| `src/pdf.js` | Builds the printable PDF, including the map |
| `src/roads.js` | Generated road geometry. Do not hand-edit. |
| `src/styles.css` | Appearance |
| `scripts/fetch-roads.mjs` | Regenerates `src/roads.js` from OpenStreetMap |
| `SOURCES.md` | Where each phone number came from |
