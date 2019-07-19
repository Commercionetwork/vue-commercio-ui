<template>
  <form @submit.prevent="onSearch">
    <div class="row d-flex align-items-center">
      <div class="col-2 col-sm-1 d-flex justify-content-center">
        <slot name="left-content" />
      </div>
      <div class="col-8 col-sm-10 d-flex justify-content-center">
        <input
          type="text"
          class="form-control bg-light rounded-pill com-placeholder-font"
          :placeholder="searchMessage"
          v-model="query"
          aria-label="Search"
          aria-describedby="search-field"
          ref="inputSearch"
        />
      </div>
      <div class="col-2 col-sm-1 d-flex justify-content-center">
        <slot name="right-content" />
      </div>
    </div>
  </form>
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
  },
  data() {
    return {
      query: ""
    };
  },
  methods: {
    onSearch() {
      this.$emit("search-bar", this.query);
    }
  },
  mounted() {
    this.$refs.inputSearch.focus();
  }
};
</script>

<style lang="scss" scoped>
.com-placeholder-font {
  font-size: 14px;
  font-weight: 300;
}
</style>
