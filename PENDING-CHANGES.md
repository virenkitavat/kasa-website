# Pending website changes

Noted only. Nothing here is applied until the owner says so.

1. **Logo: remove "café".** The header logo reads "kasa café"; change it to "kasa".
   Where: `src/layouts/Base.astro` (the `.logo` link). Header logo only; page titles,
   footer and body copy keep "Kasa Café".

2. **"What happens here" section: fit it in one screen.** Make the section more concise so the
   whole thing (heading, intro line, list of event types and the open preview) fits within the
   viewport height. Where: `src/pages/index.astro` (section 3, `.formats`).
   Measured on the live site, 18 Nov: 1459px tall on a 1440×900 desktop, 1350px on a
   1280×720 laptop, 1307px on an 834×1112 tablet, 1429px on a 390×844 phone. On every size
   it is taller than the screen.
