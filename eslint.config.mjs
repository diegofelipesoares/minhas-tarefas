import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Aplica as regras a arquivos JS, JSX, TSX, TS, etc.
  },
  {
    languageOptions: {
      globals: globals.browser, // Configura os globais do ambiente do navegador
    },
  },
  pluginJs.configs.recommended, // Regras recomendadas para JavaScript
  ...tseslint.configs.recommended, // Regras recomendadas para TypeScript
  pluginReact.configs.recommended, // Regras recomendadas para React
  pluginPrettier.configs.recommended, // Regras recomendadas para integração com Prettier
  {
    // Configurações adicionais
    parser: "@typescript-eslint/parser", // Usar o parser TypeScript
    parserOptions: {
      ecmaVersion: "latest", // Usar a versão mais recente do ECMAScript
      sourceType: "module", // Usar módulos
    },
    plugins: ["react", "@typescript-eslint", "react-hooks"],
    // Plugins para React, TypeScript e hooks do React
    rules: {
      "react-hooks/rules-of-hooks": "error",
      // Regras para hooks do React
      "react-hooks/exhaustive-deps": "warn",
      // Avisos sobre dependências de hooks
      "react/prop-types": "off",
      // Desabilitar a verificação de tipos para props (não necessário com TypeScript)
      "react/react-in-jsx-scope": "off",
      // Desabilitar a regra de React em escopo (não necessário em versões mais novas do React)
      "@typescript-eslint/explicit-module-boundary-types": "off",
      // Desabilitar a exigência de tipos explícitos para limites de módulos em TypeScript
    },
    settings: {
      react: {
        version: "detect", // Detecta automaticamente a versão do React
      },
    },
  },
];
