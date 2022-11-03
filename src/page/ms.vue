<template>
  <div class="page">
    <p>{{ expression }}</p>
    <div class="box">
      <div v-for="(item, index) in list" :key="index">
        <div v-for="child in item" :key="child.type">
          <span>{{ child.type }}</span>
        </div>
        <mu-button @click="addOfFrameOR(index)">OR</mu-button>
        <mu-button @click="addOfFrameAND(index)">AND</mu-button>
      </div>
    </div>
    <mu-button @click="addOFOutFrameOR">OR</mu-button>
    <mu-button @click="addOFOutFrameAND">AND</mu-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        [
          {
            type: "A",
            addTypeOfIn: null,
            addTypeOfOut: null,
          },
        ],
      ],
      diction: ["A", "B", "C", "D", "E"],
      expression: null, // 表达式
    };
  },
  watch: {
    list: {
      handler(newVal) {
        let total = "";
        newVal.forEach((el, index_el) => {
          let sum = "";
          sum = el.reduce((sum, item, index) => {
            if (index == 0) {
              return sum + item.type;
            } else {
              return sum + " " + item.addTypeOfIn + " " + item.type;
            }
          }, "");
          total =
            total +
            `${index_el != 0 ? el[0].addTypeOfOut : ""}` +
            " ( " +
            sum +
            " ) ";
        });
        this.expression = total;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    addOfFrameOR(index) {
      // 框内OR
      let item = this.list[index];
      let type = this.diction[index];
      if (item.length == 1) {
        item[0].type = `${type}1`;
      }
      item.push({
        type: `${type}${item.length + 1}`,
        addTypeOfIn: "or",
      });
    },
    addOfFrameAND(index) {
      // 框内AND
      let item = this.list[index];
      let type = this.diction[index];
      if (item.length == 1) {
        item[0].type = `${type}1`;
      }
      item.push({
        type: `${type}${item.length + 1}`,
        addTypeOfIn: "and",
      });
    },
    addOFOutFrameOR() {
      // 框外OR
      this.list.push([
        {
          type: this.diction[this.list.length],
          addTypeOfOut: "or",
        },
      ]);
    },
    addOFOutFrameAND() {
      // 框外AND
      this.list.push([
        {
          type: this.diction[this.list.length],
          addTypeOfOut: "and",
        },
      ]);
    },
  },
};
</script>
<style lang="less" scoped>
.page {
  .box {
    border: 10px solid #e8e8e8;
  }
}
</style>