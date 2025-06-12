<template>
  <Navigation />
  <RouterView></RouterView>
</template>


<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: {
    Navigation,
  },

};
        //look at issue with loading at first on homepage
        //Look at scary UI effect for hover, title, e.g. like Shudder
        //AND MORE TODO: make each tile clickable with router, using params
        //TODO: make your own API that includes book covers
        //TODO: make a sidebar navigation
        //TODO: differentiate font size depending on class big,wide or tall,also adjust mobile font sizing
        //TODO: when clickled on item, reveal preview only with 'summary block'.  When clicked on btn 'more', redirect to route params page with extra info

</script>
