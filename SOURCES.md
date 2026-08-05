# Where this information came from

All entries checked **August 5, 2026**. Organization websites were preferred
over third-party directories wherever one existed, because aggregator sites go
stale and disagree with each other.

## Verified against the organization's own website

| Resource | Source |
| --- | --- |
| The Samaritan Inn — address, phone | <https://saminn.org/contact/> |
| Samaritan Inn Food Pantry — address, hours, what to bring, service area | <https://saminn.org/food-pantry/> |

## Verified against search results and public directories

| Resource | Where it came from |
| --- | --- |
| Community Food Pantry of McKinney | mckinneyfoodpantry.org, foodpantries.org |
| Community Lifeline Center | communitylifeline.org |
| Hope's Door New Beginning Center | hdnbc.org, Collin County Council on Family Violence |
| National Domestic Violence Hotline | thehotline.org (nationally published number) |
| LifePath Systems | lifepathsystems.org, Texas HHS facility directory |
| Assistance Center of Collin County | assistancecenter.org |
| Salvation Army of McKinney | salvationarmyntx.org |
| Community Health Clinic (McKinney) | chc-mckinney.com, freeclinics.com |
| Health Services of North Texas | findhelp.org listing for Collin County |
| Legal Aid of NorthWest Texas | legalaidtx.org/locations/mckinney/ |
| Collin County Committee on Aging / Meals on Wheels | cccoaweb.org, City of McKinney senior resources page |
| Collin County Transit (DART) | dart.org Collin County Transit pages |
| City House | cityhouse.org, homelessshelterdirectory.org |
| Collin County Veterans Services Office | collincountytx.gov Veteran Services |
| Your Texas Benefits / 2-1-1 | 211texas.org, hhs.texas.gov |
| Family Health Center on Virginia | fhcntx.org (FQHC; dental in Suite 103) |
| Collin College Dental Hygiene Clinic | collin.edu/dentalhygiene |
| CommonGood Medical | commongoodmedical.org (formerly Hope Clinic of McKinney) |
| Hope Restored Missions — Bridge to Hope | hoperestoredmissions.org/bridge |
| Free birth certificate / ID for homeless | Texas DSHS "Certification of Homeless Status"; 42 U.S.C. §11434a |

## Things worth double-checking with a phone call

These are the entries I am least confident about. None are wrong as far as I
could tell, but they are the ones to verify first:

1. ~~**The Samaritan Inn street address.**~~ **Resolved.** Third-party
   directories listed three different addresses — 1514, 1710, and 1725 N.
   McDonald St. The tool uses **1514 N. McDonald St.**, which is both what
   saminn.org's own contact page says and what OpenStreetMap returns for the
   name "The Samaritan Inn". Two independent sources agree, so this is settled.

2. **Samaritan Inn Food Pantry and Community Lifeline Center share an
   address** (1601 N. Waddill St., the latter in Suite 102). Both came from
   their own sites, so they are probably in the same building — but confirm,
   because sending someone to the wrong door wastes a bus trip.

3. **Intake times for The Samaritan Inn.** One directory listed intake
   interviews as Tuesdays, Thursdays, and Sundays 8:00 AM – 1:00 PM. That was
   not on the official site, so the tool says "Call for current intake times"
   instead of printing times that might be out of date. If you know the real
   times, add them to `src/resources.js`.

4. **Collin County Veterans Services hours.** Listed as Mon–Fri 8:00 AM–12:00
   PM and 1:00 PM onward; the afternoon closing time was not stated anywhere I
   could find.

5. **Salvation Army of McKinney hours** were not published; the sheet says
   "Call for current hours."

## Road map

The streets drawn on the map are real geometry from **OpenStreetMap**, pulled
through the Overpass API on August 5, 2026 and baked into `src/roads.js`. The
app makes no network calls at print time.

Coverage is the box from 32.97°N to 33.28°N and −96.82°W to −96.55°W, which
spans McKinney down through Plano. It includes motorway, trunk, primary, and
secondary roads — 226 polylines, about 36 KB. Routes labelled with shields
include US 75, US 380, TX 121, TX 5, TX 78, DNT, PGBT, and SRT.

To regenerate (only needed if the service area changes):

```bash
node scripts/fetch-roads.mjs
```

> **Licence.** OpenStreetMap data is published under the ODbL. The line
> "Roads © OpenStreetMap contributors" printed on every map is required
> attribution. Do not remove it.

## Map coordinates

The `coords` on each resource came from **OpenStreetMap Nominatim** geocoding
of the street addresses above, on August 5, 2026. They are only used to draw
the small map and to compute the "about 1.2 miles southwest" line.

Two of them resolved to the street rather than the exact building, and are
flagged `approximate: true` in `src/resources.js`:

- **Community Food Pantry of McKinney** — matched "Smith Street", not 307.
- **Community Health Clinic** — matched "Medical Center Drive", not 4510.

Both are close enough for a map drawn at a scale of miles, but do not treat
the pin as the front door. The printed address and the directions link both
use the full street address, so neither is affected.

Distances on the sheet are **straight-line**, not driving distance, and the
map says so. Driving distance will always be longer.

## The Spanish translation

Every built-in resource and every line of screen text has a Spanish version
(`src/resources.es.js` and `src/i18n.js`). It uses "usted" throughout and North
Texas vocabulary — "renta", "estampillas de comida", "bil".

> **It has not been checked by a native speaker.** Before this is handed to
> real clients, someone fluent should read it — especially the
> domestic-violence entries, where an awkward phrase could cost someone their
> trust or their safety. Everything else on this page is verified fact; the
> Spanish is the one part that is not.

`npm test` fails if a resource, checkbox, or UI string is added without a
Spanish version, so the two languages cannot drift apart silently.

## Service-area limits

Six resources carry a `serves` block in `src/resources.js` because they turn
people away based on where they live. The form asks where the person lives and
drops these when they clearly would not qualify:

| Resource | Limit |
| --- | --- |
| Community Health Clinic | Northern Collin County — **not Plano, not Wylie** |
| Samaritan Inn Food Pantry | North Collin County towns only |
| Collin County Transit | McKinney, Celina, Lowry Crossing, Melissa, Princeton, Prosper |
| Assistance Center of Collin County | Collin County residents |
| CommonGood Medical | Collin County residents |
| Health Services of North Texas | Collin County residents |

Answering "not sure / no address" hides nothing — better to print an extra
place than to silently drop one on a guess.

## A note on dental

"A dentist" is a separate checkbox from "a doctor" because the two are not
interchangeable, and the two clinics do different things:

- **Family Health Center on Virginia** does full dentistry — fillings,
  extractions, dentures — for adults and children, on a sliding scale.
- **Collin College Dental Hygiene Clinic** does **cleanings and gum care
  only**. Its entry says so in bold, because sending someone with an abscessed
  tooth to a hygiene clinic wastes a trip they may not be able to repeat.

## Deliberately left out

- **Collin County Homeless Coalition** — appears to be a coalition site rather
  than a direct-service provider.
- **Dental Health Clinics of Collin County** — real, but serves only children
  ages 1–20 on Medicaid/CHIP/school lunch. Worth adding if you serve many
  families; left out for now because the sheet has no child-specific track.
