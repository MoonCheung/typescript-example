/*
 * @Description: 函数重载
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-09-02 21:56:44
 * @LastEditors: MoonCheung
 * @LastEditTime: 2020-05-24 15:41:28
 */

// 函数定义
function fun(x: number, y: number) {
  // 没有声明变量情况下：
  return x + y;
}

fun(1, 2); // 返回3

// let fun1: (x: number, y: number) => number;
// type fun2 = (x: number, y: number) => number;

// 接口定义
// interface Fun {
//     (x: number, y: number): number;
// }

function getFun(x: number, y?: number) {
  return y ? x + y : x;
}

getFun(1, 2); // 返回3

// 函数重载定义
// function fun3(...rest: number[]): number; // 返回数字类型
// function fun3(...rest: string[]): string; // 返回字符串类型

function fun3(...rest: any[]): any {
  let first = rest[0];
  if (typeof first === 'number') {
    let val = rest.reduce((pre, cur) => pre + cur);
    return val; // 返回 6
  }
  if (typeof first === 'string') {
    let val = rest.join('');
    return val; // 返回 abc
  }
}

console.log(fun3('a', 'b', 'c'));
console.log(fun3(1, 2, 3));
