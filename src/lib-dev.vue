<script>
import { ListView } from "./entry";
import { ListViewItem } from "./entry";
import { NavBar } from "./entry";
import { SearchBar } from "./entry";
export default {
  name: "VueCommercioUiLibDev", // vue library dev component
  components: {
    ListView,
    ListViewItem,
    NavBar,
    SearchBar
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <list-view-item cols="3">
          <div slot="left-content">left</div>
          <div slot="main-content">main</div>
          <div slot="right-content">right</div>
        </list-view-item>
        <list-view-item cols="4">
          <div slot="left-content">left</div>
          <div slot="main-content">main</div>
          <div slot="right-content">right</div>
        </list-view-item>
      </div>
    </div>
    
    <nav-bar></nav-bar>
    <search-bar :placeholderMessage="'Test'"></search-bar>
  </div>
</template>

<style scoped></style>

<style lang="scss">
@import "./assets/scss/custom-bootstrap.scss";
@import "./assets/scss/style.scss";
@import "bootstrap/scss/bootstrap.scss";
</style>