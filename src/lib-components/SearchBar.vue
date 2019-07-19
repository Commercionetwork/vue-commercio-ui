<template>
  <div class="row d-flex align-items-center">
    <div class="col-2 col-sm-1 d-flex justify-content-center">
      <slot name="left-content" />
    </div>
    <div class="col-8 col-sm-10 d-flex justify-content-center">
      <form @submit.prevent="onSearch">
        <input
          type="text"
          class="form-control bg-light rounded-pill"
          :class="placeholderStyle"
          :placeholder="placeholderMessage"
          v-model="query"
          aria-label="Search"
          aria-describedby="search-field"
          ref="inputSearch"
        />
      </form>
    </div>
    <div class="col-2 col-sm-1 d-flex justify-content-center">
      <slot name="right-content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  description: "Display the search bar",
  props: {
    placeholderMessage: {
      type: String,
      default: "Search...",
      note: "The input search placeholder"
    },
    placeholderStyle: {
      type: Object,
      default: () => ({
        "font-size": "14px",
        "font-weight": 300
      }),
      note: "The placeholder style"
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
