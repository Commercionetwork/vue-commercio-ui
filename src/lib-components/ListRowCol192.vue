<template>
  <div class="row py-1 d-flex flex-row align-items-center">
    <!-- Left content -->
    <div class="col-12 col-md-1 py-1 py-md-0">
      <slot name="left-content"/>
    </div>
    <!-- Main content -->
    <div class="col-12 col-md-9 py-1 py-md-0">
      <slot name="main-content"/>
    </div>
    <!-- Separator (showed on small viewport) -->
    <div class="col-12 d-md-none">
      <hr>
    </div>
    <!-- Right content -->
    <div class="col-12 col-md-2 py-1 py-md-0">
      <slot name="right-content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListRowCol192",
  description: "Display list row"
}
</script>
