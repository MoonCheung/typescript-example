/*
 * @Description: template literal types
 * @Author: MoonCheung
 * @Date: 2022-08-09 22:38:07
 * Copyright 2022 MoonCheung
 * @FilePath: /my_project/typescript-samples/typescript-example/src/views/basic/29_template.ts
 */

// 当在插值位置使用联合时，类型是可以由每个联合成员表示的每个可能的字符串文字的集合
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
// 对于模板文字中的每个插值位置，联合是交叉相乘的：
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";
 
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;

// Typescript内在字符串操作类型
// 将字符串中的每个字符转换为大写版本
type UpperCase = "Hello, world"
type ShoutyGreeting = Uppercase<UpperCase>
// 将字符串中的每个字符转换为等效的小写字母
type LowerCase = "Hello, world"
type QuietGreeting = Lowercase<LowerCase>

// 将字符串中的第一个字符转换为等效的大写字母
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;

// 将字符串中的第一个字符转换为等效的小写字母
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;