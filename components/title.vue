<template>
  <div class="title">{{ text }}</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
// @include mainTitle;
.title {
  width: 100%;
  padding: 30px 0;
  text-align: center;
}
</style>
