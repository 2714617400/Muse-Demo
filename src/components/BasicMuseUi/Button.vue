<template>
  <div>
    <mu-button v-bind="$attrs" v-on="$listeners">
      <slot>{{demo}}</slot>
    </mu-button>
  </div>
</template>
<script>
export default {
  name: 'HButton',
  inheritAttrs: false,
  props: {
    demo: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {

    }
  }
}
</script>