<template>
  <div class="page_404">
    404
  </div>
</template>
<style lang="less" scoped>
.page_404 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-style: italic;
  font-family: 'shaonv';
   -webkit-text-stroke: 1px #a4a4a4; // 字体描边: 参数 边宽度 边颜色
  color: #c4c4c4;
  // color: #FB7299;
  // background-color: #FB7299;
  // background-color: #00A0D8;

  background-image: url('../assets/gezi_sq.png'); // 背景图片
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;

  -webkit-user-select: none; // 文字不能被选中
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>