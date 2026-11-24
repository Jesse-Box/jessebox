# jessebox

Source for [jessebox.net](https://www.jessebox.net), built with [Astro](https://astro.build) and deployed on Netlify.

The site currently serves the Holding page while it's rebuilt. The previous Gatsby + DatoCMS site is tagged `v1-gatsby`.

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Type-check (`astro check`) and build `dist/` |
| `npm run preview` | Preview the build locally                    |
| `npm run format`  | Format with Prettier                         |

## Publishing

`main` is production. Open a pull request to get a Netlify Deploy Preview; merging deploys. Build settings live in `netlify.toml`, redirects in `public/_redirects`.
