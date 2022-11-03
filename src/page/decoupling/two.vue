<template>
  <div>
    <mu-button @click="onclick">{{text}}</mu-button>
  </div>
</template>
<script>
export default {
  props: ['text'],
  methods: {
    onclick() {
      this.$router.push({
        name: 'decouplingC',
        params: {
          newValue: 'ha~ha~ha'
        }
      })
    }
  }
}
</script>