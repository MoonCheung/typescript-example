/*
 * @Description: 泛型通过extends集合keyof
 * @Author: MoonCheung
 * @Date: 2022-07-24 23:44:46
 * Copyright 2022 MoonCheung
 * @FilePath: /my_project/typescript-samples/typescript-example/src/views/basic/21_generic_keyof.ts
 */

interface Lengthwise {
  length: number;
}
// 继承(extends)父接口:Lengthwise
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
// 将extends结合keyof支持对象或者数组遍历
function getProperty<T, Key extends keyof T>(obj: T, key: Key) {
  return obj[key];
}

let obj = { a: 1, b: 2, c: 3, d: 4 };
let arr = [4,'hell',2,'world',0];

console.log('将对象遍历:', getProperty(obj, "a"))
console.log('将数组遍历:', getProperty(arr, 2))
console.log('继承(extends)父接口:', loggingIdentity({length: 3, value: 10}))