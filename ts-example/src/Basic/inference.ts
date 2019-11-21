/*
 * @Description: 类型检查机制
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-11-21 21:58:15
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-11-21 22:25:37
 */

let a = 1;
let b = [1, null, 'a'];
let c = { x: 1, y: 2 };

let d = (x = 1) => x + 1;

// console.log(d()); // 打印： 2

interface Foo {
    bar: number;
}

/** **** 第一次实例Demo ****** */
// let foo: Foo = {
//     bar: 1, // 打印： 1
// };

/** **** 第二次实例Demo ****** */
// let foo = {
//     bar: 1, // 打印： 1
// } as Foo;

/** **** 第三次实例Demo ****** */
// let foo = <Foo>{
//     bar: 1, // 打印： 1
// };

// console.log(foo.bar);
