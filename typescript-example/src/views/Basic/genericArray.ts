/*
 * @Description: 泛型数组类型
 * @Author: MoonCheung
 * @Date: 2020-08-15 13:02:41
 * @Copyright 2020 MoonCheung
 * @FilePath: \web_dynamic\web_practice\ts_project\typescript-example\src\views\Basic\genericArray.ts
 */

// NOTE：第一种可在元素类型后面接上[],表示由此类型元素组成的一个数组
let arr: number[] = [1, 2, 3, 4, 5];
// NOTE: 第二种可使用数组泛型，Array<数字类型>
let arr1: Array<number> = [6, 7, 8, 9, 10];
// NOTE: 第三种可使用数组泛型，Array<字符串类型>
let str: Array<string> = ['hello', 'string'];
