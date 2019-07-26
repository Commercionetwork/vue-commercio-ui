<template>
  <div>
    <div
      v-if="items.length > 0"
      data-test="items"
    >
      <ul class="list-group list-group-flush">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="list-group-item"
        >
          <slot :data="item" />
        </li>
      </ul>
    </div>
    <div
      v-if="isFetching"
      class="com-font-s14-w700"
      v-html="loadingMessage"
      data-test="loading"
    />
    <div
      v-if="!isFetching && items.length <= 0"
      class="py-3 com-font-s14-w700"
      v-html="emptyMessage"
      data-test="empty-list"
    />
  </div>
</template>

<script>
export default {
  name: "ListView",
  description: "Render a content as a list",
  props: {
    isFetching: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => []
    },
    emptyMessage: {
      type: String,
      default: "Empty list",
      note: "The message showed if there is no item"
    },
    loadingMessage: {
      type: String,
      required: true,
      note: "The message showed while loading"
    }
  },
  data() {
    return {
      bottomReached: false
    };
  },
  watch: {
    bottomReached(value) {
      if (value) {
        this.$emit("bottom-reached");
      }
    }
  },
  methods: {
    bottomVisible() {
      if (this.isFetching) {
        return;
      }
      const scrollY = Math.ceil(window.scrollY);
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      this.bottomReached = bottomOfPage || pageHeight < visible;
    }
  },
  created() {
    window.addEventListener("scroll", this.bottomVisible);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.bottomVisible);
  }
};
</script>
