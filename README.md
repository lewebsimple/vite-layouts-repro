# Vite layouts / catch-all bug

Enabling vite-plugin-vue-layouts with vite-plugin-pages prevents "/" to match agains the catch-all `pages/[...all].vue`

* Home page should display "Catch all" when `pages/index.vue` is absent, but route isn't matched so it's only a blank page.
* Renaming `pages/_index.vue` to `pages/index.vue` allows matching the "/" route and display the component (we could have the same template twice but not very DRY)
* Disabling vite-plugin-vue-layouts prevents the problem from happening, see `src/main.ts` (comment / uncomment respective blocks to test)
