/*
 * @Description: 泛型函数与类
 * @Author: MoonCheung
 * @Date: 2022-06-12 14:52:35
 * Copyright 2022 MoonCheung
 * @FilePath: /my_project/typescript-samples/typescript-example/src/views/basic/12_generics.ts
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

// 泛型接口
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
