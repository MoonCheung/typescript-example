/*
 * @Description: TS的ES模块
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-11-25 22:26:53
 * @LastEditors: MoonCheung
 * @LastEditTime: 2020-05-24 15:42:27
 */

// 单独导出
export let a = 1;

// 批量导出
let b = 2;
let c = 3;
export { b, c };

// 接口导出
export interface P {
  x: number;
  y: string;
  z: object;
}

// 导出函数
export function fun() {}

// 导出时起别名
function g() {}
export { g as G };

// 默认导出,不需函数名
export default function() {
  console.log("I' m default");
}

// 引入外部模块，重新导出
export { str as hello } from './b';
