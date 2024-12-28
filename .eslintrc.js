// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve('@estarossa/eslint-quicksetup/config')],
  parserOptions: {
    project: './tsconfig.json',
  },
};
