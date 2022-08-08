/*
 * @Description: 枚举类型
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-08-27 12:34:53
 */

// 数字枚举
enum Role {
  Vue = 1,
  React,
  Angular
}

// console.log(Role.Vue);
// console.log(Role);

// 字符串枚举
enum Message {
  Success = '恭喜你学到Typescript',
  Error = '抱歉，面试失败'
}

// 异构枚举
enum Answer {
  N,
  Y = 'Yes'
}

// console.log(Answer.Y);

// 常量枚举
const enum Month {
  One,
  Two,
  Treen,
  Four = Month.Treen + 1
  // Five = () => 5,
}

let month = [Month.Two, Month.Four, Month.Treen];

// 枚举类型
enum E {
  a,
  b
}

enum F {
  a = 1,
  b = 2
}

enum G {
  a = 'applet',
  b = 'H5'
}
// 声明新变量,总之得到返回两个3
let e: E = 3;
let f: F = 3;