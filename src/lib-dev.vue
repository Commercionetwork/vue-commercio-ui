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
    <vue-commercio-ui-sample></vue-commercio-ui-sample>
  </div>
</template>

<style scoped>
.vue-commercio-ui-lib-dev {
  display: block;
  width: 400px;
  margin: 25px auto;
}
</style>
