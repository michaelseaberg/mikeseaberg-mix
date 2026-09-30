# mikeseaberg-mix

Portfolio site for Mike Seaberg, mixing engineer. Vite + React + Tailwind, with the home-page slider adapted from the "Showcase slider" Figma template.

Pages: Home (`/`), Bio (`/bio`), Credits (`/credits`), Contact (`/contact`).

## Run locally

```bash
npm install
npm run dev
```

## Editing content

- **Name, emails, Instagram, photos:** `src/site.ts`
- **Bio text:** `src/pages/Bio.tsx`
- **Photos:** `src/assets/photos/` (the hero slide order is `heroSlides` in `src/site.ts`)

## Credits

The Credits page shows one tile per project (album, EP or single), linking to it on Spotify.

- `data/songs.json` has every song from Mike's TIDAL credit list (tidal.com/credits/13623605), matched to Spotify. Each row is `[title, artists, releaseDate, roleIndex, spotifyTrackId, albumArtHash]`, most popular first. It isn't bundled into the site. It's kept so the projects can be regrouped later.
- `src/data/credits.json` is what the site uses: those songs grouped into projects. Each song goes with the TIDAL release that carries the most of Mike's credits, so a pre-release single folds into its album. The exception is when TIDAL only credits the single. Each row is `[projectTitle, artists, releaseDate, roleIndex, spotifyPath, albumArtHash]`, most popular first, which is the "Most popular" sort order. `spotifyPath` is `album/<id>`, or `track/<id>` for the few projects where no album link was found.
- Projects from Mike's Spotify credit playlists that aren't on TIDAL are added as Mix Engineer and placed by Spotify play count.
- `roleIndex` points into `ROLES` in `src/data/credits.ts`. A project shows Mike's top role across its songs. TIDAL's immersive credits and its "Mixing" + "Second Engineer" pairing both count as Mix Engineer.

`data/hold/` holds credits taken off the site, with each entry's original position, so they can be put back in popularity order.

To add a project, add a row to `src/data/credits.json` where it belongs in popularity order. The album id is the last part of its Spotify link (`open.spotify.com/album/<id>`). The art hash is the end of the cover image URL after `ab67616d0000b273`.

## Contact form

There's no backend. The form opens the visitor's email app with a message to the address in `site.ts`, with their answers filled in.

## Deploy (GitHub Pages)

Every push to `main` builds the site and publishes it with GitHub Pages (`.github/workflows/deploy.yml`).

- `public/CNAME` holds the custom domain, `mikeseabergmix.com`.
- The build copies `index.html` to `404.html`. GitHub Pages serves that file for any path it doesn't know, which lets links like `/credits` load the app.

DNS lives at DreamHost. The root domain has A records for GitHub Pages (185.199.108.153, .109, .110 and .111), and `www` is a CNAME to `michaelseaberg.github.io`. The email (MX) records are separate. Leave them alone.
