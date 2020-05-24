/*
 * @Description: 映射类型
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-11-22 23:15:40
 * @LastEditors: MoonCheung
 * @LastEditTime: 2020-05-24 15:41:45
 */

interface Obj {
  a: number;
  b: number;
}

// 将T中的所有属性设为只读
type OneObj = Readonly<Obj>;
// T的所有属性可选
type TwoObj = Partial<Obj>;
// 从T中，选择一组键在联合K中的属性
type ThreeObj = Pick<Obj, 'a' | 'b'>;
// 构造具有类型T的属性K的类型
type fourObj = Record<'x' | 'y', Obj>;
