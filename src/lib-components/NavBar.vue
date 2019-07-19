<template>
  <div class="row my-3">
    <!-- desktop view -->
    <div class="col-sm-12 offset-sm-0 col-md-10 offset-md-1 d-none d-sm-block">
      <div class="btn-group d-flex">
        <slot />
      </div>
    </div>
    <!-- mobile view -->
    <div class="col-12 d-block d-sm-none">
      <div class="btn-group-vertical d-flex">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  description: "Display the navigation bar"
};
</script>
