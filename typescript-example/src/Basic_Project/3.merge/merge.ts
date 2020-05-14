/*
 * @Description: 声明合并
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-11-26 23:42:45
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-11-27 00:11:49
 */

// 接口之间可以重复多个定义合并
interface interA {
    x: number;
    foo(bar: number): number;
    foo(bar: string[]): string;
    foo(bar: 'a'): string;
}

interface interA {
    y: number;
    foo(bar: string): string;
    foo(bar: 'b'): string;
}

let mergeA: interA = {
    x: 1,
    y: 2,
    foo (bar: any) {
        return bar;
    },
};

console.log(mergeA); // { x: 1, y: 2, foo: [Function: foo] }

class classC {}
namespace classC {
    export let state = 'hello Class';
}

function Lib () {}
namespace Lib {
    export let fun = 'hello function';
}

console.log('namespace:', classC.state); // namespace: hello Class
console.log('namespace:', Lib.fun); // namespace: hello function

// 字符串枚举
enum Color {
    red = '红色',
    yellow = '黄色',
    blue = '蓝色',
}

namespace Color {
    export function mix () {
        let color = '混合颜色';
        return color;
    }
}

console.log(Color);
