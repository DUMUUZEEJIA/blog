<template>
  <section>
    <div class="btn">
      <button v-for="(item, index) in btn" :key="index" @click="switchType(item, index)">{{ item }}</button>
    </div>
    <div>
      <i :style="style">top</i><i :style="style">bottom</i> 
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      btn: ['inline', 'inline-block', 'block', 'absolute', 'float'],
      style: {}
    }
  },
  methods: {
    switchType(item, index) {
      if (index <= 2) {
        this.style = { display: item }
      } else if (index === 3) {
        this.style = { position: 'absolute' }
      } else {
        this.style = { float: 'left' }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.btn {
  margin-bottom: 20px;
}
div {
  position: relative;
}
i {
  width: 100px;
  margin: 20px;
  display: inline-block;
  background: #dacece;
  font-style: normal;
}
i:nth-child(2) {
  background: #dacece;
}
</style>
