/*
 * @Description: 编写声明文件
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-11-27 16:15:50
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-11-27 17:15:08
 */
import $ from 'jquery';
import m from 'moment';
import umdLib from './umd-lib';
import moduleLib from './module-lib';

$('.app').css('color', 'red');
globalLib({ x: 1 });
globalLib.doSomething();

moduleLib({ y: 2 });
moduleLib.doSomething();

umdLib.doSomething();

// 模块插件
declare module 'moment' {
    export function myFunction(): void;
}
m.myFunction = () => {};

// 全局插件
declare global {
    namespace globalLib {
        function doAnyting(): void;
    }
}
globalLib.doAnyting = () => {};
