import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    files: ["**/*.js"], 
    languageOptions: { sourceType: "commonjs" },
    env: {
      browser: true,
      commonjs: true,
      es2021: true,
      node: true
    },
    extends: ["airbnb-base"],
    parserOptions: {
      ecmaVersion: "latest"
    },
    rules: {
      "no-console": "off"
    },
    type: "module"
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];