<template>
  <div class="one_page">
    <mu-button color="primary" @click="clickMe">click me!</mu-button>
    <mu-text-field v-model="value" placeholder="默认3行, 最大显示6行" :disabled="false" multi-line :rows="3" :rows-max="6"></mu-text-field><br/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '将我传送到下级页面叭~'
    }
  },
  methods: {
    clickMe() {
      this.$router.push({name: 'two', params: {id: this.value, name: 'hh'}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.one_page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
