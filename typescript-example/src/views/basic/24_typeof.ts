/*
 * @Description: typeof types
 * @Author: MoonCheung
 * @Date: 2022-08-08 21:32:18
 * Copyright 2022 MoonCheung
 * @FilePath: /my_project/typescript-samples/typescript-example/src/views/basic/24_typeof.ts
 */
type param = number | string

// 定义fn函数，在添加该函数或者我输入数据，那么Data也随之更新
function fn(x: param = 520, y: param = 7.77) {
  return { x, y };
}

// 由于 fn 返回类型为 { a: number, b: number } 的数据，因此 Data 成为该类型。
// 这意味着我们不必维护 fn 输出的两个副本，取而代之的是，我们在函数内部有一个类型，以及符合该类型的类型，从而简化了我们的代码。
type Data = ReturnType<typeof fn>

function consoleData(data: Data) {
  console.log(JSON.stringify(data));
}

let stringifyNumbers = fn(1, 2);
consoleData(stringifyNumbers);