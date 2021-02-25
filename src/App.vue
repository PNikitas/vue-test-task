<template>
  <div id="app">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">

    <drawer />

    <router-view/>
  </div>
</template>

<script>
import drawer from './components/Drawer.vue';

export default {
  name: 'App',
  components: {
    drawer,
  },
}
</script>

<style>
h1, h2, h3, h4, h5, h6 {
  padding: 0;
  margin: 0;
}
</style>