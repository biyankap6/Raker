import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "eol-last": "error",
      indent: ["error", 2, { SwitchCase: 1 }],
      "linebreak-style": ["error", "unix"],
      "no-await-in-loop": "warn",
      "no-multiple-empty-lines": "warn",
      "no-trailing-spaces": "error",
      "no-useless-escape": "off",
      "no-var": "warn",
      "prefer-const": "error",
      "require-atomic-updates": "off",
      "space-in-parens": ["error", "never"],
      "space-infix-ops": "error",
    },
  },
];
