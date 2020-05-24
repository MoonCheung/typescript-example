/*
 * @Description: 类与接口的关系
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-10-13 17:21:36
 * @LastEditors: MoonCheung
 * @LastEditTime: 2020-05-24 15:41:55
 */

/** **** 第一次实例Demo ****** */
// 接口
interface Human {
  name: string;
  eat(): void;
}

class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string = '我是亚洲人';
  eat() {}
  age: number = 10;
  sleep() {}
}

let asian: Human = new Asian('中国人');
console.log(asian); // name: '中国人', age: 10

// 接口继承父接口
interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

// 接口继承父接口
interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {
    console.log('hello run');
  },
  eat() {
    console.log('hello eat');
  },
  cry() {
    console.log('hello boy');
  }
};

console.log(boy);

/** **** 第二次实例Demo ****** */
class Auto {
  state = 1;
}

// 接口继承父类Auto
interface AutoInterface extends Auto {
  state: number;
}

// 子类C继承接口AutoInterface
class C implements AutoInterface {
  state: number = 2;
}

class Bus extends Auto implements AutoInterface {
  state: number = 3;
}

let bus = new Bus();
console.log(bus); // state: 3
