import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'dist/*',
      'node_modules/*',
      'jest.config.js'
    ],
    ignorePatterns: ["dist", "node_modules"],
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parser: "@typescript-eslint/parser", // Use the TypeScript parser
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2020, // Update to a suitable ECMAScript version
        sourceType: "module", // For ES Modules
        ecmaFeatures: {
          jsx: true, // Enable JSX for TypeScript files if needed
        },
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-expressions": ["error", { allowShortCircuit: true }],
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/no-empty-object-type": ["warn"],
      "no-unused-vars": "error",
      "no-undef": "error",
      "prefer-const": "error",
      "no-console": "warn"
    },
  },

];
