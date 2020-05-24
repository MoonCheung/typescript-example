/*
 * @Description: TS的ES模块
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-11-25 22:26:53
 * @LastEditors: MoonCheung
 * @LastEditTime: 2020-05-24 15:42:33
 */

import { a, b, c } from './a'; // 批量导入
import { P } from './a'; //导入接口
import { fun as Fun } from './a'; //导入函数
import { G } from './a'; // 导入已别名
import * as All from './a'; //导入所有
import myFunction from './a'; //导出默认函数

console.log(a, b, c);

let p: P = {
  x: 1,
  y: '2',
  z: {
    a: 'hello obj'
  }
};

console.log('interface:', p);
console.log('函数:', Fun());
console.log('别名:', G);
myFunction();
