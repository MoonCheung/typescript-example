/*
 * @Description: Indexed Access Types
 * @Author: MoonCheung
 * @Date: 2022-08-08 22:51:55
 * Copyright 2022 MoonCheung
 * @FilePath: /my_project/typescript-samples/typescript-example/src/views/basic/25_indexed.ts
 */

type Person = { age: number; name: string; alive: boolean };

//Person[*]：索引类型本身就是一种类型，因此我们可以完全使用联合keyof、 或其他类型:
type I1 = Person["age" | "name"];
type Age = Person[keyof Person];
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];