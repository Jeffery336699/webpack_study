import {add,mul} from "./js/mathUtls";

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