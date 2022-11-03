<template>
  <div class="node_test">
    <div>
      <div class="radio_group" :key="'radio ' + i" v-for="i in 3">
        <mu-radio :value="i" v-model="type" :label="'Radio ' + i"></mu-radio>
      </div>
      <mu-text-field v-model="url"> </mu-text-field>
    </div>
    <mu-button color="primary" @click="testGet">Send</mu-button>
    <div class="context">
      {{ data }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: null,
      type: "get",
      url: "",
    };
  },
  methods: {
    testGet() {
      this.$api.get("api/").then((res) => {
        if (res.code == 0) {
          this.data = res.data;
        } else {
          this.data = res.msg;
        }
      });
    },
    testPost() {
      this.$api.post("api/").then((res) => {
        if (res.code == 0) {
          this.data = res.data;
        } else {
          this.data = res.msg;
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.node_test {
  text-align: center;
  .context {
    min-height: 500px;
    border: 1px solid #c4c4c4;
  }
  .radio_group {
    display: flex;
  }
}
</style>