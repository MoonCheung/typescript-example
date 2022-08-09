/*
 * @Description: conditional types
 * @Author: MoonCheung
 * @Date: 2022-08-08 23:16:43
 * Copyright 2022 MoonCheung
 * @FilePath: /my_project/typescript-samples/typescript-example/src/views/basic/26_conditional.ts
 */

// 定义IdLabel接口
interface IdLabel {
  id: number /* some fields */;
}
// 定义NameLabel接口
interface NameLabel {
  name: string /* other fields */;
}
// createLabel 重载函数
// 创建createLabel函数名称含有不同类型，这将变成很麻烦
// function createLabel(id: number): IdLabel;
// function createLabel(name: string): NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//   throw "unimplemented";
// }

// 相反可以将逻辑编码更改条件类型
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel
// 然后，我们可以使用该条件类型将重载简化为没有重载的单个函数。
function createLabel<T extends number | string>(value:T): NameOrId<T>{
  throw value;
}
let a = createLabel("typescript"); // typescript
console.log('watch a:', a)
let b = createLabel(2.8);  // 2.8
console.log('watch b:', b)
let c = createLabel(Math.random() ? "hello" : 42); // hello
console.log('watch c:', c)

// 条件类型约束
// 通常，条件类型的检查会为我们提供一些新信息。就像使用类型保护缩小可以给我们一个更具体的类型一样，条件类型的真正分支将进一步限制我们检查的类型的泛型。
// type MessageOf<T extends { message: unknown }> = T['message'] 
// 如果我们想MessageOf采用任何类型，并且默认为never某个message属性不可用，该怎么办？我们可以通过将约束移出并引入条件类型来做到这一点：
type MessageOf<T> = T extends { message: unknown } ? T["message"] : unknown;
// 作为另一个示例，我们还可以编写一个名为Flatten将数组类型展平为其元素类型的类型，但不理会它们：
// type Flatten<T> = T extends any[] ? T[number] : T;
// 定义Email接口
interface Email {
  message: string | number
}
// 定义Dog接口
interface Dog {
  bark(): void;
}
type EmailMessageContent = MessageOf<Email>
type DogMessageContents = MessageOf<Dog>;
// 打印-email
const message:EmailMessageContent = 'hello 条件类型约束' // hello 条件类型约束
const message1:EmailMessageContent = 520 // 520

const message2:DogMessageContents = {
  bark(){
    return 'hello dog'
  }
}