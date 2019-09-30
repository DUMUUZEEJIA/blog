<template>
  <div class="wrap">
    <span class="icon-arrow"></span>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <span class="icon-circle"></span>
  </div>
</template>
<style lang="stylus" scoped>
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .icon-circle,
  .icon-arrow {
    display: inline-block;
    width: 140px;
    height: 10px;
    padding: 35px 0;
    border-top: 10px solid;
    border-bottom: 10px solid;
    background: currentColor;
    background-clip: content-box;
  }
  .icon-circle {
    height: 60px;
    width: 60px;
    padding: 20px;
    border: 10px solid;
    border-radius: 50%;
  }
}
</style>
