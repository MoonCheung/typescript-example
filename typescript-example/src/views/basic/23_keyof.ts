/*
 * @Description: keyof types
 * @Author: MoonCheung
 * @Date: 2022-07-27 23:52:32
 * Copyright 2022 MoonCheung
 * @FilePath: /my_project/typescript-samples/typescript-example/src/views/basic/23_keyof.ts
 */

// keyof 运算符采用keyof对象类型并生成其键的字符串或数字文字联合
type Point = { x: number; y: number };
type P = keyof Point;

type Arrayish = { [key: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

// `keyof Arrayish` resolves to `number` here
function createStringPair(property: A, value: number): Arrayish{
  return { [property]: value };
}
// `keyof Mapish` resolves to `string` here
function createStringPair1(property: M, value: boolean): Mapish{
  return { [property]: value };
}

console.log('watch createStringPair:', createStringPair(520, 7.77)) //  watch createStringPair: { '520': 7.77 }
console.log('watch createStringPair1:', createStringPair(520, 1314)) //  watch createStringPair1: { '520': 1314 }
