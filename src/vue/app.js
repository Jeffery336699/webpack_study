export default {
    template: `
      <dev>
      <h2>{{ message }}</h2>
      <button @click="clickTest">点击</button>
      </dev>
    `,
    data() {
        return {
            message: 'hello webpack-2'
        }
    },
    methods: {
        clickTest() {
            console.log('你好呀');
        }
    }
}