# Community leaders redesign

The homepage follows the selected Leaders in the Spotlight concept: a bright orange and white palette, a centered statement for community leaders, community photography, and practical resources.

## Preserved content

The original community-day and networking-event photographs and the Build Genie and Feedback Feijoa logos are unchanged. Vite preserves their existing asset hashes and deployed filenames. All four downloadable PDF resources remain available, along with the Vancouver community link, community tool links, contribution form, official AWS directory, and leader advice.

The directory uses the existing November 2025 dataset with community corrections. Vancouver has been added using the existing featured community URL, and the Women Bay Area entry is placed in the United States instead of Canada. The directory labels its source date and links to AWS for current listings.

## Implementation

The responsive homepage is in `src/App.jsx` with styling in `src/index.css`. The accessible native disclosure panels use the advice in `src/data/leaderInsights.js`. The map is split into a separate lazy loaded chunk and supports the same search and country filters as the directory list. A standalone orange globe SVG favicon is in `public/favicon.svg`.

## Build and deployment

```sh
npm ci
npm run build
npm run dev
npm run deploy
```

GitHub Pages serves the compiled files from the `gh-pages` branch. The custom domain remains `awsusergroups.com`, supplied by `public/CNAME`. Source changes belong on `main`; deploy the complete `dist` directory. Keep `.nojekyll` on the Pages branch to serve build assets directly.

Validation for this redesign includes the production build, desktop and mobile visual review, navigation, advice disclosures, directory search, empty results, country filtering, pagination, image loading, and local resource availability.
