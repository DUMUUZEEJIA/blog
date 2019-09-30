<template>
  <div class="wrap">
    <button id="btn">button</button>
    <label for="btn" onclick="alert('我是通过label触发的button')">label</label>
    <input id="file" type="file" v-show="0" />
    <label for="file">上传文件</label>
  </div>
</template>
<style lang="stylus" scoped>
.wrap {
  // padding-top: 30px;
  // padding-bottom: 30px;
  text-align: center;
  label:before {
    content: '';
    margin-left: 20px;
    font-size: 0;
    vertical-align: middle;
    padding: 3px 1px 3px 20px;
    border-left: 1px solid gray;
  }
}
</style>
