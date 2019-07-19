<template>
  <div class="row d-flex align-items-center">
    <div class="col-2 col-sm-1 d-flex justify-content-center">
      <span class="p-1">
        <Icon
          name="filter"
          scale="2"
          class="text-black-50"
        />
      </span>
    </div>
    <div class="col-8 col-sm-10 d-flex justify-content-center">
      <input
        class="form-control bg-light rounded-pill com-font-s14-w400"
        :placeholder="searchMessage"
      />
    </div>
    <div class="col-2 col-sm-1 d-flex justify-content-center">
      <span class="p-1">
        <slot name="icon" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  description: "Display the search bar",
  props: {
    searchMessage: {
      type: String,
      default: "Search...",
      note: "The search placeholder"
    }
  }
};
</script>
