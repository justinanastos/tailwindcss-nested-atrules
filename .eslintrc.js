module.exports = {
  "env": {
    "es6": true
  },
  "parserOptions": {
    "allowImportExportEverywhere": true,
    "ecmaVersion": 2018,
    "sourceType": "module"
  },

  "plugins": ["prettier"],

  "extends": [
    "airbnb-base",
    "prettier",
    "prettier/react",
    "plugin:eslint-comments/recommended"
  ],

  "rules": {
    "camelcase": ["error", {
      "properties": "never",
      "allow": [
        "^[A-Z]",
      ]
    }],
    "class-methods-use-this": 2,
    // The default for `eslint-comments/disable-enable-pair` doesn't include
    // `allowWholeFile`
    "eslint-comments/disable-enable-pair": ["error", {allowWholeFile: true}],
    // The recommended doesn't include `eslint-comments/no-unused-disable`
    "eslint-comments/no-unused-disable": "error",
    "global-require": 0,
    "import/extensions": 0,
    "import/no-absolute-path": 0,
    "import/no-default-export": "warn",
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": "off",
    "import/no-useless-path-segments": 2,
    "import/order": [
      2,
      {
        "newlines-between": "never",
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ]
      }
    ],
    "import/prefer-default-export": 0,
    "lines-between-class-members": 0,
    "new-cap": 1,
    "no-console": 2,
    "no-multi-assign": 0,
    "no-restricted-properties": 0,
    "no-plusplus": 0,
    "no-restricted-globals": 0,
    "no-underscore-dangle": 0,
    "no-use-before-define": ["error", { "classes": false, "functions": false }],
    "no-useless-escape": 0,
    "one-var": 0,
    "prettier/prettier": 2,
    "prefer-destructuring": 0,
  }
}
