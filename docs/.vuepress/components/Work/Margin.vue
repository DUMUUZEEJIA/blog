<template>
  <session class='wrap'>
    <h3>流体布局</h3>
    <div class="stream">
      <img src="//goss1.cfp.cn/creative/vcg/400/version23/VCG21gic15084639.jpg" width="200">
      <p>我是流体布局，自动伸缩空间；我是流体布局，自动伸缩空间；我是流体布局，自动伸缩空间；我是流体布局，自动伸缩空间；我是流体布局，自动伸缩空间；我是流体布局，自动伸缩空间；我是流体布局，自动伸缩空间；我是流体布局，自动伸缩空间；我是流体布局，自动伸缩空间；</p>
    </div>
    <h3>margin与padding 相辅相成, 等高布局</h3>
    <p>通过<code>padding-bottom: 999px; margin-bottom: -999px;</code>正负抵消</p>
    <dl class="adaptive">
      <dd><img src="//goss1.cfp.cn/creative/vcg/400/new/377e4977d7964f4291aa9501a60a86ee.jpg"></dd>
      <dd>我想和你一样高</dd>
    </dl>
  </session>
</template>
<style lang="stylus" scoped>
.wrap {
  .stream {
    overflow: hidden;
    img {
      float: left;
      margin-right: 10px;
    }
  }
  .adaptive {
    overflow: hidden;
    dd {
      float: left;
      padding-bottom: 99999px;
      margin-bottom: -99999px;
      &:nth-child(2) {
        background: #dacece;
      }
    }
  }
}
</style>
