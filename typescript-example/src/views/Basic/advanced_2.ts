/*
 * @Description: 索引类型
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-11-22 23:15:40
 * @LastEditors: MoonCheung
 * @LastEditTime: 2020-05-24 15:41:42
 */

let obj = {
  a: 1,
  b: 2,
  c: 3
};

interface Obj {
  a: number;
  b: number;
}

// keyof T 对对象做些约束
let key: keyof Obj;
// T[K]
let value: Obj['a'];

// 普通函数
// function getValues (obj: any, keys: string[]) {
//     return keys.map((key) => obj[key]);
// }

// 泛型函数对一些对象约束些...
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key]);
}

console.log(getValues(obj, ['a', 'b'])); // [ 1, 2 ]
// console.log(getValues(obj, ['c', 'd'])); // [ 3, undefined ]
