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
    "@typescript-eslint/no-inferrable-types": "off"
  }
}