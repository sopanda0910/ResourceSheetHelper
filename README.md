# Resource Sheet Maker — The Samaritan Inn

A small web tool for front-desk staff and volunteers. You check a few boxes
about the person in front of you, and it makes a printable PDF listing the
local places that can actually help them, with phone numbers, addresses,
hours, and a directions link.

Everything runs in the browser. Nothing typed into it is saved or sent
anywhere.

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
  phone: '(972) 547-4404',
  hours: 'Mon-Wed 11:00 AM - 3:30 PM...',
  notes: 'Thursday stays open until 6:30 PM if you work during the day.',
  needs: ['food'],                    // which checkboxes show this place
  situations: [],
  priority: 3,                        // lower numbers print first
}
```

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
- **A safety warning for domestic violence.** If "Unsafe at home / abuse" is
  checked, both the screen and the PDF warn that carrying the paper home could
  itself be dangerous. This is standard practice for DV services.
- **No invented directions.** The sheet gives the full address plus a link
  that opens real turn-by-turn directions from The Samaritan Inn. Written-out
  street directions are not included, because guessing them would be worse
  than useless for someone standing at a bus stop.
- **Nothing is stored.** No database, no analytics, no network calls. Client
  names never leave the machine.

## Files

| File | What it is |
| --- | --- |
| `src/resources.js` | The resource list. **Edit this one.** |
| `src/App.jsx` | The form and the on-screen preview |
| `src/pdf.js` | Builds the printable PDF |
| `src/styles.css` | Appearance |
| `SOURCES.md` | Where each phone number came from |
