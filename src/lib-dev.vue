<script>
import { ListRowCol183 } from "./entry";
import { ListRowCol192 } from "./entry";
import { ListView } from "./entry";
import { NavBar } from "./entry";
import { SearchBar } from "./entry";
export default {
  name: "VueCommercioUiLibDev", // vue library dev component
  components: {
    ListRowCol183,
    ListRowCol192,
    ListView,
    NavBar,
    SearchBar
  }
};
</script>

<template>
  <div class="vue-commercio-ui-lib-dev">
    <list-row-col183></list-row-col183>
    <list-row-col192></list-row-col192>
    <list-view></list-view>
    <nav-bar></nav-bar>
    <search-bar></search-bar>
  </div>
</template>

<style scoped>
.vue-commercio-ui-lib-dev {
  display: block;
  width: 400px;
  margin: 25px auto;
}
</style>
