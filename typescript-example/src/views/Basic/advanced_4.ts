/*
 * @Description: 条件类型
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-11-22 23:15:40
 * @LastEditors: MoonCheung
 * @LastEditTime: 2020-05-24 15:41:48
 */

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';

type T1 = TypeName<string>;
type T2 = TypeName<number[]>;

// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]>;

// never 做个类型注解
type Diff<T, U> = T extends U ? never : T;
type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>;
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// never | "b" | "c"
// "b" | "c"

type NotNull<T> = Diff<T, null | undefined>;
type T5 = NotNull<string | number | undefined | null>;

// Exclude<T, U>
// NonNullable<T>

// Extract<T, U>
// 从T中提取可分配给U的那些类型
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>;

// ReturnType<T>
// 获得函数类型的返回类型
type T8 = ReturnType<() => string>;
