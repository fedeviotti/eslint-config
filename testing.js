module.exports = {
  extends: "plugin:jest-dom/recommended",
  plugins: ["jest-dom", "testing-library"],
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"]
    }
  ]
};
