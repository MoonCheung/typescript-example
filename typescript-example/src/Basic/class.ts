/*
 * @Description: 类或者抽象类的类型
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-10-13 15:02:36
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-10-13 17:37:20
 */

/** **** 第二次实例Demo ****** */
// 抽象类
abstract class Animal {
    eat () {
        console.log('Abstract eat');
    }
    abstract sleep(): void;
}

/** **** 第一次实例Demo ****** */
// 类
class Dog extends Animal {
    constructor (name: string, priname: string) {
        super();
        this.name = name;
        this.priname = priname;
    }
    // 公有成员
    public name: string = 'dog';
    run () {}
    // 私有成员
    private priname: string = 'cat';
    // 受保护成员
    protected pro () {}
    // 只读成员
    readonly IntNum: number = 4;
    // 静态成员
    static food: string = 'bones';
    sleep () {
        console.log('Dog sleep');
    }
}
console.log(Dog.prototype);
let dog = new Dog('wangwang', 'miaomiao');
// console.log(dog); // 实例之后得到返回 name: 'wangwang', priname: 'miaomiao'
// console.log(dog.IntNum); // 4
// console.log(Dog.food); // 不在类的实例化情况下，调用类的本身得到返回bones

// 在Dog类继承抽象类animal
dog.eat(); // Abstract eat

class Husky extends Dog {
    constructor (name: string, priname: string, public color: string) {
        super(name, priname);
        this.color = color;
        this.pro();
    }
}
// console.log(Husky.food); // bones

/** **** 第二次实例Demo ****** */
// 在子类继承多态抽象类
class Cat extends Animal {
    sleep () {
        console.log('Cat sleep');
    }
}

let cat = new Cat();

/** ************************* */

let animals: Animal[] = [dog, cat];
animals.forEach((i) => {
    i.sleep(); // Dog sleep Cat sleep
});

/** **** 第三次实例Demo ****** */
// 类的实例化链式调用多方便的
class WorkFlow {
    step1 () {
        return this;
    }
    step2 () {
        return this;
    }
}

class MyFlow extends WorkFlow {
    next () {
        return this;
    }
}

let myFlow = new MyFlow()
    .next()
    .step1()
    .next()
    .step2();
