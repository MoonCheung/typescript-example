/*
 * @Description: 泛型函数与类
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-11-10 16:28:09
 * @LastEditors: MoonCheung
 * @LastEditTime: 2020-05-24 15:41:34
 */

// 泛型函数
function log<T>(value: T): T {
  console.log('本身函数内:', value);
  return value;
}

log<number[]>([1, 2, 3]);
log(['a', 'b', 'c']);

// 泛型类
class Log<T> {
  // 成员函数
  run(value: T): T {
    console.log('本身类内:', value);
    return value;
  }
}

let myLog = new Log<string>();
myLog.run('1');
let objLog = new Log<object>();
objLog.run({
  a: 1
});

// 接口
interface Length {
  length: number;
}
function logAdvance<T extends Length>(value: T): T {
  console.log('本身继承接口得到值:', value, value.length);
  return value;
}

logAdvance([1]);
logAdvance(['1', '2', '3']);
logAdvance({ length: 3 });
