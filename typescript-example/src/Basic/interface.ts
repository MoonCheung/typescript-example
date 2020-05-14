/*
 * @Description: 接口类型
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-08-28 14:55:45
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-08-28 15:57:28
 */
/** **** 第一次实例Demo ****** */
// 用于声明变量的结构
interface List {
    // TypeScript 类型系统允许你在一个接口里使用 readonly 来标记属性,只能只读，不被允许修改
    readonly id: number;
    // name: string;
    [name: string]: any; // 它的返回类型是any
    age?: number; // ?指的是可以没有，也可以有的，那么不会这样报错了
}

interface Result {
    data: List[];
}

// 数据data
let result = {
    data: [{ id: 1, name: 'MoonCheung', sex: '男' }, { id: 2, name: 'iKmoons', age: 2 }],
};

// 函数声明
function render (result: Result) {
    result.data.forEach((val) => {
        // console.log('报上名字:', val.id, val.name); // 打印出 1 MoonCheung, 2 iKmoons
        if (val.age) {
            // console.log('岁数:', val.age); //打印出岁数: 2
        }
    });
}

render(result);

/** **** 第二次实例Demo ****** */
interface StringArray {
    [index: number]: string;
}

let chars: StringArray = ['One', 'Two', 'Treen'];

// console.log(chars); // 打印出[ 'One', 'Two', 'Treen' ]

/** **** 第三次实例Demo ****** */
interface Names {
    [x: string]: any;
    [z: number]: string;
}

type Add = (z: number, y: number) => number;
let add: Add = (a: number, b: number) => a + b;

let getAdd = add(1, 2);
// console.log(getAdd); // 打印出3

/** **** 第四次实例Demo ****** */
// 混合类型
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

function getLib () {
    // 还是提示缺少属性，需用到类型断言
    let lib = (() => {
        console.log('hello 混合类型');
    }) as Lib;
    // 增加属性
    lib.version = '1.0.0';
    // 增加方法
    lib.doSomething = () => {
        console.log('hello 该调用方法');
    };
    return lib;
}

let lib1 = getLib();
lib1();
let lib2 = getLib();
lib2.doSomething();
