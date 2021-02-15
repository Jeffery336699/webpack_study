<template>
  <dev>
    <h2 class="title">{{ message }}</h2>
    <button @click="clickTest">点击</button>
    <Cpn/>
  </dev>
</template>

<script>
import Cpn from "./Cpn"

export default {
  name: "App",
  components: {
    Cpn
  },
  data() {
    return {
      message: 'hello webpack-3'
    }
  },
  methods: {
    clickTest() {
      console.log('你好呀');
    }
  }
}
</script>

<style scoped>
.title {
  color: blueviolet;
}
</style>