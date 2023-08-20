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

### Commit №5

- Created `/blog/` page and her sections
- Created component **Post**
- Changes and fixed bugs on code in other pages and  sections

### Commit №6

- Connection to _**Supabase**_ Db in `src/utils/supabase`
- Created classes for call datas from db and called datas
- removed mock objects from `src/utils/utils.ts`
- Changed components for support datas from db
- Converted components from `.astro` to `.tsx` (**Header** not changed)
- Recieved datas fully typed with `src/utils/types.ts` and `src/utils/supabase/types.ts`
- Enabled SSR mode and added adapter `@astrojs/node`
- Created pages:
  - `marketplace/collections`
  - `marketplace/collections/[...collection_name]` _dynamic page_
- And their divided sections
- Deleted images in `public/` folder
- Fixed flex layouts in `marketplace` page

### Commit №7 

- Created and completed `marketplace/nfts` page
- Recieved datas for this page from Db
