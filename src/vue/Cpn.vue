<template>
  <div>
    <h2 class="h-title">{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      message: '我是子组件2333333111'
    }
  }
}
</script>

<style scoped>
.h-title{
  color: crimson;
}
</style>