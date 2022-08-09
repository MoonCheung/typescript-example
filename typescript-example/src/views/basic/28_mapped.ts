/*
 * @Description: mapped types
 * @Author: MoonCheung
 * @Date: 2022-08-09 21:09:41
 * Copyright 2022 MoonCheung
 * @FilePath: /my_project/typescript-samples/typescript-example/src/views/basic/28_mapped.ts
 */

// 映射类型是一种通用类型，它使用 PropertyKeys 的联合（通常通过 keyof 创建）来迭代键以创建类型：
// 您可以通过前缀 - 或 + 来删除或添加这些修饰符。如果您不添加前缀，则假定为 +。
// readonly 可变性只读
// ? 可选性
// type OptionsFlags<Type> = {
//   -readonly [Property in keyof Type]: Type[Property];
// };

type OptionsFlags<Type> = {
  // -?：-前缀删除可选性修饰符，否则报错静态类型
  [Property in keyof Type]-?: Type[Property];
};

type FeatureFlags = {
  darkMode: boolean;
  newUserProfile?: boolean;
};

// 添加-?前缀修饰符，该变量缺少了一属性会引发报错
// const conforms: OptionsFlags<FeatureFlags> = {
//   darkMode: true,
// };

const conforms: OptionsFlags<FeatureFlags> = {
  darkMode: true,
  newUserProfile: false
};

console.log('conforms:', conforms);

// 在 TypeScript 4.1 及更高版本中，您可以使用映射类型中的 as 子句重新映射映射类型中的键
// 您可以利用模板文字类型等功能从以前的属性名称中创建新的属性名称:
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
  name: string;
  age: number;
  location: string;
}

const my:Getters<Person> = {
  getName: () => 'MoonCheung',
  getAge: () => 30,
  getLocation: () => 'china'
}

console.log(`自我介绍:${my.getName()},${my.getAge()},${my.getLocation()}`) // 自我介绍:MoonCheung,30,china

// 您可以通过条件类型生成 never 来过滤掉键：
type RemoveKindField<Type> = {
  // 删除“种类”属性
  [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};

interface Circle {
  kind: "circle";
  radius: number;
}

const circle:RemoveKindField<Circle> = {
  radius: 3.14
}

console.log('circle:', circle) // { radius: 3.14 }

// 您可以映射任意联合，而不仅仅是string | number | symbol，但任何类型的联合
type EventConfig<Events extends { key: string }> = {
  [E in Events as E["key"]]: (event: E) => void;
}

type SquareEvent = { key: "square", x: number, y: number };
type CircleEvent = { key: "circle", radius: number };

const config:EventConfig<SquareEvent | CircleEvent> = {
  square: () => ({x: 20, y: 20}),
  circle: () => ({radius: 3.14})
}

// 映射类型与此类型操作部分中的其他功能很好地配合使用,例如，这是一个使用条件类型的映射类型，它根据对象是否将属性 pii 设置为文字 true 来返回 true 或 false：
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;