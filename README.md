# JavaScript Style Guide

> This is an opinionated JavaScript guideline inspired by Airbnb

## Setup

### 1) Install `eslint-config` and peer dependencies

```bash
npx install-peerdeps --dev @fedeviotti/eslint-config
```

### 2) Configure ESLint

#### eslint-config/hooks

This entry point enables the linting rules for React hooks (requires v16.8+). To use, add `"extends": ["@fedeviotti/eslint-config", "@fedeviotti/eslint-config/hooks"]` to your `.eslintrc`.

#### eslint-config/base

This entry point is the base configuration for JavaScript projects (without React). To use, add `"extends": ["@fedeviotti/eslint-config/base"]` to your `.eslintrc`.

#### eslint-config/typescript

This entry point enables the linting rules for TypeScript. To use add this to your `.eslintrc`.

```diff
{
  extends: [
    "@fedeviotti/eslint-config",
+   "@fedeviotti/eslint-config/typescript"
  ],
+ parserOptions: {
+   project: './tsconfig.json'
+ }
}
```
