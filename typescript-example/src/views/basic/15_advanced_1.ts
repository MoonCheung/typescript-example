/*
 * @Description: 交叉类型与联合类型
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-11-22 23:15:40
 * @LastEditors: MoonCheung
 * @LastEditTime: 2020-05-24 15:43:26
 */

// 接口类型
interface DogInterface {
  run(): void;
}

// 接口类型
interface CatInterface {
  jump(): void;
}

let get: DogInterface & CatInterface = {
  run() {},
  jump() {}
};

let a1: number | string = 1;
let b1: 'a' | 'b' | 'c';
let c1: 1 | 2 | 3;

// 类继承接口 DogInterface
class Dog1 implements DogInterface {
  run() {}
  eat() {}
}
// 类继承接口 CatInterface
class Cat1 implements CatInterface {
  jump() {}
  eat() {}
}

// 枚举类型
enum Master {
  Boy,
  Girl
}

// 交叉类型
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog1() : new Cat1();
  // pet.jump(); //报错
  // pet.run(); //报错
  pet.eat(); // 不报错
  return pet;
}

// 联合类型
interface One {
  kind: 'one';
  size: number;
}

interface Two {
  kind: 'two';
  width: number;
  height: number;
}

interface Three {
  kind: 'three';
  radius: number;
}

type Shape = One | Two | Three;
function area(s: Shape) {
  switch (s.kind) {
    case 'one':
      return s.size * s.size;
      break;
    case 'two':
      return s.width + s.height;
      break;
    case 'three':
      return Math.PI * s.radius * 2;
      break;
    default:
      return ((e: never) => {
        throw new Error(e);
      })(s);
  }
}

console.log(area({ kind: 'one', size: 2 }));
