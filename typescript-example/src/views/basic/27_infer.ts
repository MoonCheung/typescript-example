/*
 * @Description: infer types
 * @Author: MoonCheung
 * @Date: 2022-08-09 00:13:30
 * Copyright 2022 MoonCheung
 * @FilePath: /my_project/typescript-samples/typescript-example/src/views/basic/27_ infer.ts
 */

// 条件类型为我们提供了一种方法来推断我们使用infer关键字在真实分支中比较的类型。例如，我们可以推断元素类型，Flatten而不是使用索引访问类型“手动”获取它：
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
type Num = GetReturnType<() => number>;
type Str = GetReturnType<(x: string) => string>;
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

// 当从具有多个调用签名的类型（例如重载函数的类型）进行推断时，会根据最后一个签名进行推断（这可能是最宽松的包罗万象的情况）。无法根据参数类型列表执行重载决议。
declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;
type T1 = ReturnType<typeof stringOrNum>;

// 分配性是期望的行为。extends为避免这种行为，您可以用方括号将关键字的每一侧括起来
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
type StrArrOrNumArr = ToArrayNonDist<string | number>;