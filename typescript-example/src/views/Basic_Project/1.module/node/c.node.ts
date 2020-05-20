/*
 * @Description: ts的node模块
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-11-25 22:52:43
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-11-25 23:05:57
 */

let nodeC1 = require('./a.node');
let nodeC2 = require('./b.node');
import nodeC3 from '../es6/d';

console.log(nodeC1, nodeC2);
console.log(nodeC3);
