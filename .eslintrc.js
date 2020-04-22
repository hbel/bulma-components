module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'no-useless-constructor': 0,
        'quotes': ["error", "double", {allowTemplateLiterals: true}],
        'indent': ["error", 4],
        'semi': ["error", "always"],
        'no-explicit-any': 0,
        'no-undef': 0,
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "react/display-name": "off"
    }
};