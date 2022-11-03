<template>
  <div>
    <mu-paper class="demo_drag" :z-depth="1">
      <draggable
        class="drag"
        v-model="data"
        :forceFallback="forceFallback"
        chosenClass="chosen_class"
        dragClass="drag_class"
        ghostClass="ghost_class"
        :group="group"
        :disabled="disabled"
        :sort="sort"
        :delay="delay"
        :animation="animation"
        :fallbackTolerance="fallbackTolerance"
        :filter="filter"
        :handle="handle"
        @start="onStart"
        @end="onEnd"
        @add="onAdd"
        @remove="onRemove"
        @update="onUpdate"
        @choose="onChoose"
        @sort="onSort"
        @change="onChange"
        :move="onMove"
      >
        <transition-group>
          <div :class="['item', index == 1 ? 'child' : '', index == 3 || index == 2 ? 'gold' : '']" v-for="(element, index) in data" :key="element.text">
            {{ element.text }}
          </div>
        </transition-group>
      </draggable>
    </mu-paper>

    <mu-paper class="demo_drag" :z-depth="1">
      <draggable
        class="drag"
        v-model="dataTwo"
        :forceFallback="forceFallback"
        chosenClass="chosen_class"
        dragClass="drag_class"
        ghostClass="ghost_class"
        :group="group"
        :disabled="disabled"
        :sort="sort"
        :delay="delay"
        :animation="animation"
        :fallbackTolerance="fallbackTolerance"
        :filter="filter"
        :handle="handle"
        @start="onStart"
        @end="onEnd"
        @add="onAdd"
        @remove="onRemove"
        @update="onUpdate"
        @choose="onChoose"
        @sort="onSort"
        @change="onChange"
        :move="onMove"
      >
        <transition-group>
          <div :class="['item', index == 1 ? 'child' : '', index == 3 || index == 2 ? 'gold' : '']" v-for="(element, index) in dataTwo" :key="element.text">
            {{ element.text }}
          </div>
        </transition-group>
      </draggable>
    </mu-paper>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      data: [
        {
          text: "爱德华",
        },
        {
          text: "菲利奥斯",
        },
        {
          text: "爱丽丝",
        },
        {
          text: "罗兰",
        },
      ],

      dataTwo: [
        {
          text: "公孙离",
        },
        {
          text: "狄仁杰",
        },
        {
          text: "李白",
        },
        {
          text: "韩信",
        },
      ],

      group: 'text', // 值相同的组可以互相拖动
      forceFallback: false, // 忽略HTML5的DnD行为，并强制退出。（h5里有个属性也是拖动，这里是为了去掉H5拖动对这个的影响）
      animation: 150, // 动画时间
      fallbackTolerance: 15, // 用像素指定鼠标在被视为拖拽之前应该移动的距离
      sort: true, // 内部拖动排序列表
      delay: 100, // 拖动元素被选中时间
      disabled: false, // 禁用
      filter: '.child', // 禁用带有该class选择器的元素的拖动 (或许唯一选择器也有效？)
      handle: '.gold', // 只允许带有该class选择器的元素的拖动
      draggable: '', // 指定带有该class选择器的元素可拖动
      fallbackOnBody: false,  // 将克隆的DOM元素添加到文档的主体中。（默认放在被拖动元素的同级）
      scroll: true, // 默认true,有滚动区域是否允许拖拽
      scrollFn: function(offsetX, offsetY, originalEvent, touchEvt, hoverTargetEl) {  }, // 滚动回调函数
      scrollSensitivity: 30, // 距离滚动区域多远时，滚动滚动条
      scrollSpeed: 10, // 滚动速度
    };
  },
  methods: {
    onStart(evt) {
      console.log(
        '拖动开始: ', evt
      )
    },
    onEnd(evt) {
      console.log(
        '拖动结束: ', evt
      )
    },
    onAdd(evt) { // 监听数据的新增
      console.log(
        'add: ', evt
      )
    },
    onRemove(evt) { // 监听数据的移除
      console.log(
        'remove: ', evt
      )
    },
    onUpdate() {},
    onChoose() {},
    onSort() {},
    onChange(evt) { // 监听data里的数据变动，包括顺序改变、新增、移除
      // console.log(
      //   'change: ', evt
      // )
    },
    onMove(evt, ori) {
      console.log(
        '拖动中: ', evt, ori
      )
    },
  },
};
</script>
<style lang="less" scoped>
.demo_drag {
  max-width: 1200px;
  padding: 50px 0;
  margin: 3% auto;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .drag {
    width: 500px;
    background-color: goldenrod;
    .item {
      text-align: center;
      padding: 10px;
      border: 1px solid #e8e8e8;

      -webkit-user-select: none; // 文字不能被选中
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      cursor: move;
    }
  }
  .chosen_class {
    background-color: yellowgreen;
  }
  .drag_class {
    background-color: seagreen;
    border-color: slategray;
  }
  .ghost_class {
    background-color: rosybrown;
    border-color: black;
  }
}
</style>