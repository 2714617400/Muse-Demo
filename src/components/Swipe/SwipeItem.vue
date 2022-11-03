<template>
  <div class="swipe_item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'SwipeItem'
}
</script>
<style lang="less" scoped>
.swipe_item {
  max-width: 100vw;
  width: 60vw;
  height: 120vw;
  margin: 0 5vw;
  flex-shrink: 0;
  flex-grow: 0;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>