<template>
  <session class='wrap'>
    <article class="box">
      <div style="padding-top: 50%; background: #dacece;" />
      <div style="padding: 50%; background: #bda8a8;" />
    </article>
    <article style="width: 100px;">
      <span style="padding: 40px;"> eg:a 床前明月光，疑是地上霜。</span>
    </article>
    <article class="struct">
      <span></span>
      <mark>eg:b</mark>
    </article>
  </session>
</template>
<style lang="stylus" scoped>
.wrap {
  display: flex;
  .box {
    width: 100px;
  }
  .struct {
    width: 100px;
    color: white;
    span {
      padding: 50%;
      background: #bfb5b5;
    }
  }
}
</style>
