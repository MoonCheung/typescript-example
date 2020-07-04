let obj = {
  a: 1,
  b: 2,
  c: 3
};

interface Obj {
  a: number;
  b: number;
}

// keyof T 对对象做些约束
let key: keyof Obj;
// T[K]
let value: Obj['a'];

// 泛型函数对一些对象约束些...
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key]);
}

const step = document.querySelector('.step1');
console.log('cat step:', step);

console.log(`cat 索性类型:`, getValues(obj, ['a', 'b'])); // [ 1, 2 ]
