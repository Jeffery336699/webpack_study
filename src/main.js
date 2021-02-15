import {add, mul} from "./js/mathUtls";

console.log("我来了");
console.log(add(10, 20));
console.log(mul(10, 20));
console.log(mul(20, 20));

//依赖css样式
// import("./css/normal.css")
const normal = require('./css/normal.css')
//依赖less文件
require('./css/special.less')
document.writeln('<h2>every body</h2>')

//使用vue开发
import Vue from 'vue'

const App = {
    template: `
      <dev>
      <h2>{{ message }}</h2>
      <button @click="clickTest">点击</button>
      </dev>
    `,
    data() {
        return {
            message: 'hello webpack-1'
        }
    },
    methods: {
        clickTest() {
            console.log('你好呀');
        }
    }
}

const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})
