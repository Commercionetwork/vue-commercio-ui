<template>
  <div class="row py-1 d-flex flex-row align-items-center">
    <!-- Left content -->
    <div class="col-12 col-md-1 py-1 py-md-0">
      <slot name="left-content" />
    </div>
    <!-- Main content -->
    <div :class="mainContent">
      <slot name="main-content" />
    </div>
    <!-- Separator (showed on small viewport) -->
    <div class="col-12 d-md-none">
      <hr>
    </div>
    <!-- Right content -->
    <div :class="rightContent">
      <slot name="right-content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ListViewItem",
  description: "display a ListView item",
  props: {
    cols: {
      type: String,
      default: "3",
      validator(value) {
        return ["3", "4"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    mainContent() {
      return this.cols === "3"
        ? "col-12 col-md-9 py-1 py-md-0"
        : "col-12 col-md-8 py-1 py-md-0";
    },
    rightContent() {
      return this.cols === "3"
        ? "col-12 col-md-2 py-1 py-md-0"
        : "col-12 col-md-3 py-1 py-md-0";
    }
  }
};
</script>
