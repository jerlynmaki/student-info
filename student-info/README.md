# Student Information Website

A simple Nuxt project that demonstrates reusable components and props.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Components (app/components/)

- AppHeader.vue: website navigation
- AppFooter.vue: website footer
- StudentCard.vue: shows student information (data passed in through props)
- InfoCard.vue: shows a title and a description
- AppButton.vue: reusable button with `label` and `color` props

## Pages (app/pages/)

- index.vue: home page
- students.vue: four student cards rendered with v-for
- about.vue: about page

The header and footer are placed once in `app/layouts/default.vue`, so every page shares them.
