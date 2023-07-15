# Changelog and commits on this project

### Commit №1
- Created project `antique-nft-market`
- Created components: **Header**, **Layout**.
- Created index page and her **HeroSlider**, **Count** sections

### Commit №2
- Fixed problems of flexibility in **Header** and in other sections of `HomePage`.
- Completed **SomeNfts** and **RecentDrops** sections in `HomePage`.
- Configured _routes_ see `./utils/routes.ts`
- And optimized functions like `slug()` and `swiperBreakpoints()`
- Objects for DRY concept in `./utils/utils.ts`

### Commit №3
- Fixed image sizes on large screens
- Completed **NewsLetter**, **LatestPosts** and **Footer** component
- Ended layout of **HomePage**
- Changes in `globals.scss`, `utils.ts`
- Created `posts.ts` file in `utils/` folder.
- Deleted `Header/` folder and moved `Header.astro` file to `components/`
- Changed name: `COMMITS.md` to `README.md`

### Commit №4
- Completed **/marketplace/** page
- Fixed styles in **Footer** component
- Repeated sections and elements converted to reusable components
- Fixed typos in `routing` links 
- Added `routing` links for **/blog/** page
- Fixes and deletions in **HomePage** sections
- Typed props in all Components and created file `types.ts`
- Removed unused other imports and `preact` in project (maybe i will add it later)