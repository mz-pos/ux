/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: [".eslintrc.cjs"],
  extends: ["@repo/eslint-config/index.js", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  rules: {
    // 코드 스타일
    'quotes': ['error', 'single'],           // 홑따옴표
    'semi': ['error', 'never'],              // 세미콜론 사용안함 (사용하는것 권장)
    'indent': ['error', 2],                  // 2칸 들여쓰기
    'eol-last': ['error', 'always'],         // 마지막 줄 빈 줄
    'no-multiple-empty-lines': ['error', {max: 1}], // 코드 사이 빈 줄 1개로 제한
    'space-before-function-paren': ['error', 'never'], // 함수 괄호 앞 공백 금지

    // 코드 품질
    'no-console': 'off',                    // console 사용
    'no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
    'no-var': 'error',                       // var 사용 금지
    'prefer-const': 'error',                 // 불변이면 const 사용
    'eqeqeq': ['error', 'always'],           // === 사용
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // import 관련 (기존에는 특별한 룰이 없는것으로 보임)
    'import/order': ['error', { // 순서를 그룹별로 정리하고 그룹사이에 빈줄 추가
      'groups': [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
      'newlines-between': 'always',
    }],

    // vue 관련은 기존에 있던것 + 생각나는것만 추가
    'vue/no-unused-components': 'warn', // 선언해 놓고 사용하지 않은 컴포넌트에 대한 경고
    'vue/html-self-closing': ['error', { // 닫는 태그
      html: {
        void: 'always',
        normal: 'never',
        component: 'always',
      },
    }],
    'vue/max-attributes-per-line': ['warn', { // 한줄에 쓸수있는 속성 수 제한
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      }
    }],
    'vue/singleline-html-element-content-newline': 'off',
  }
};
