module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "prettier",
    "@typescript-eslint"
  ],
  parserOptions: {
    project: "./tsconfig.json"
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    /**
     * off 或 0：表示不验证规则。
     * warn 或 1：表示验证规则，当不满足时，给警告
     * error 或 2 ：表示验证规则，不满足时报错
     */
    // 关闭冲突规则
    'prettier/prettier': [
      'error',
      {
        printWidth: 120, // 一行的字符数，如果超过会进行换行，默认为80
        tabWidth: 2, // 一个tab代表几个空格数，默认为80
        useTabs: false, // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
        singleQuote: true, //使用单引号而不是双引号。
        semi: true, // 行尾是否使用分号，默认为true
        trailingComma: 'none', //多行时尽可能打印句号。
        bracketSpacing: true, // 在对象文字中打印括号之间的空格。
        jsxBracketSameLine: true
      }
    ],
    "@typescript-eslint/no-inferrable-types": "off"
  }
}