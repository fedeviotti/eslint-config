module.exports = {
  extends: ["./rules/base/typescript.js"].map(require.resolve),
  settings: {
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".json",
          ".ts",
          ".tsx",
          ".d.ts",
        ],
      },
    },
  },
  rules: {
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
