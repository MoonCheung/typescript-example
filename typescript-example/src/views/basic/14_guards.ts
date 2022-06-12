/*
 * @Description: 类型保护机制
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-11-22 00:42:50
 * @LastEditors: MoonCheung
 * @LastEditTime: 2020-05-24 15:42:10
 */

// 枚举类型
enum Type {
  Strong,
  Week
}

class Java {
  helloJava() {
    console.log('hello Java');
  }
}

class JavaScript {
  helloJavaScript() {
    console.log('hello JavaScript');
  }
}

function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, a: number | string) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();

  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }

  return lang;
}

console.log(getLanguage(Type.Week, 1)); // hello JavaScript JavaScript {}
