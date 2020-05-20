/*
 * @Description: 命名空间
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-11-26 23:09:55
 * @LastEditors: MoonCheung
 * @LastEditTime: 2020-05-18 01:57:17
 */

namespace Shape {
  let pi = Math.PI;
  export function cricle (r: number) {
      return pi * r ** 2;
  }
}

// 被编译出来js文件加入HTML文件来运行打印的
console.log(Shape.square(1)); // 1
console.log(Shape.cricle(1)); // 3.141592653589793

// 使用ES模块引入
// import square = Shape.square;
// console.log(square(2)); // 被编译出来js文件加入HTML文件来运行打印的
