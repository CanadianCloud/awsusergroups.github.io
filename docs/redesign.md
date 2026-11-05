# Community leaders redesign

The homepage follows the selected Leaders in the Spotlight concept: a bright orange and white palette, a centered statement for community leaders, community photography, and practical resources.

## Preserved content

The original community-day and networking-event photographs and the Build Genie and Feedback Feijoa logos are unchanged. Vite preserves their existing asset hashes and deployed filenames. All four downloadable PDF resources remain available, along with the Vancouver community link, community tool links, contribution form, official AWS directory, and leader advice.

The directory uses the existing November 2025 dataset with community corrections. Vancouver has been added using the existing featured community URL, and the Women Bay Area entry is placed in the United States instead of Canada. The directory labels its source date and links to AWS for current listings.

## Implementation

The responsive homepage is in `src/App.jsx` with styling in `src/index.css`. Nine supplied community photographs now support a five-photo hero mosaic and a four-photo community gallery. The dark hero background is no longer used or published. The original two event photographs and tool logos remain unchanged.

The 13 leader questions are initially hidden inside one native disclosure panel. Visitors can expand the panel, then open any individual question. The advice is in `src/data/leaderInsights.js`.

The map is split into a separate lazy loaded chunk and supports the same search and country filters as the directory list. It renders bundled Natural Earth land geometry with Leaflet. No external tile endpoint or API key is needed. See `src/data/maps/README.md` for source and licensing information. A standalone orange globe SVG favicon is in `public/favicon.svg`.

## Build and deployment

```sh
npm ci
npm run build
npm run dev
npm run deploy
```

GitHub Pages serves the compiled files from the `gh-pages` branch. The custom domain remains `awsusergroups.com`, supplied by `public/CNAME`. Source changes belong on `main`; deploy the complete `dist` directory. Keep `.nojekyll` on the Pages branch to serve build assets directly.

Validation for this redesign includes the production build, desktop and mobile visual review, navigation, advice disclosures, directory search, empty results, country filtering, pagination, image loading, and local resource availability.
