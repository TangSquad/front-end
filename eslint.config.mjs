import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      "no-console": "warn",
      "semi": ["warn", "always"],
      "indent": ["warn", 2],
      "object-curly-spacing": ["warn", "always"], // 중괄호 안에 공백 추가
      "comma-dangle": ["warn", "always-multiline"], // 여러 줄일 때 마지막 쉼표 허용
      "@typescript-eslint/no-unused-vars": ["warn"],
      "prefer-const": "error",
      "react/react-in-jsx-scope": "off", // JSX 사용 시 React 범위 규칙 비활성화
    },
  },
];