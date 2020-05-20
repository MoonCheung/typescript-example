/*
 * @Description: X（目标类型） = Y（源类型），X 兼容 Y
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-11-21 22:50:25
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-11-22 00:39:06
 */

let s: string = '1';

// 接口兼容性
interface X {
    a: number;
    b: string;
}

// 接口兼容性
interface Y {
    a: number;
    b: string;
    c: object;
}

let x: X = {
    a: 1,
    b: '2',
};

let y: Y = {
    a: 1,
    b: '2',
    c: {
        d: 'hello obj',
    },
};

x = y; // 完全兼容
// y = x; // 不完全兼容，因为x对象里少了c属性引发报错

// 函数兼容性
type Handler = (a: number, b: number) => void;
function hof (handler: Handler) {
    console.log('handler:', handler);
    return handler;
}

let handler1 = (a: number) => {};
hof(handler1);
let handler2 = (a: number, b: number, c: number) => {};

// 可选参数和剩余参数
let g = (p1: number, p2: number) => {};
let h = (p1?: number, p2?: number) => {};
let i = (...arg: number[]) => {};
g = h;
h = i;
i = g;

// 2)参数类型
let handler3 = (a: string) => {};
// hof(handler3);  // 完全不兼容

interface Point3D {
    x: number;
    y: number;
    z: number;
}

interface Point2D {
    x: number;
    y: number;
}

let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};

p2d = p3d; // 完全兼容
p3d = p2d; // 同样完全兼容

// 3) 返回值类型
let f1 = () => ({
    name: 'Alice',
});

let g1 = () => ({
    name: 'Alice',
    location: '北京',
});

f1 = g1; // 完全兼容
// g1 = f1 //不完全兼容

// 4) 函数重载
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload (a: any, b: any): any {}

// 5) 枚举兼容性
enum Fruit {
    apple,
    Banana,
}

enum Color {
    Red,
    Blue,
    Green,
}

let fruit: Fruit.apple = 1;
// let color: Color.Red = Fruit.apple; //完全不兼容
let no: number = Fruit.apple; // 完全兼容

// 6)类兼容性
class A {
    // 构造器
    constructor (a: number, b: number) {}
    id: number = 1;
    // 私有成员
    private name: string = 'hello class A';
}

class B {
    // 构造器
    constructor (a: number) {}
    // 静态
    static s = 1;
    id: number = 2;
    // 私有成员
    private name: object = {
        a: 'hello 私有对象',
    };
}

// 子类C继承父类A
class childC extends A {}
let cc = new childC(1, 2); // childC { id: 1, name: 'hello class A' }
let aa = new A(1, 2); // A { id: 1, name: 'hello class A' }
let bb = new B(3); // B { id: 2, name: { a: 'hello 私有对象' } }
// aa = bb; // 完全不兼容
// bb = aa; // 完全不兼容
cc = aa; // 完全兼容
aa = cc; // 完全兼容

// 7)泛型兼容性
interface Empty<T> {
    // value: T;
}

let num1: Empty<number> = {};
let str1: Empty<string> = {};

num1 = str1; // 完全兼容

let log1 = <T>(x: T): T => {
    console.log('x');
    return x;
};

let log2 = <T>(y: T): T => {
    console.log('y');
    return y;
};

log1 = log2; // 完全兼容
