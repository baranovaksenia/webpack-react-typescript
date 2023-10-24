module.exports = {
    env: {
        browser: true, // Specifies the environment as a browser
        es2021: true, // Specifies ES2021 as the target environment
    },
    extends: ['plugin:react/recommended', 'airbnb'], // Extends recommended configurations for React and Airbnb style guide
    parser: '@typescript-eslint/parser', // Specifies the parser for TypeScript
    parserOptions: {
        ecmaFeatures: {
            jsx: true, // Allows parsing JSX
        },
        ecmaVersion: 'latest', // Specifies the latest ECMAScript version
        sourceType: 'module', // Indicates use of ECMAScript modules
    },
    plugins: ['react', '@typescript-eslint'], // Plugins for React and TypeScript
    rules: {
        'react/jsx-indent': [2, 4], // Enforces 4-space indentation for JSX
        'react/jsx-indent-props': [2, 4], // Enforces 4-space indentation for JSX props
        indent: [2, 4], // Enforces 4-space indentation for other code
        'react/jsx-filename-extension': [ // Allows JSX in .js, .jsx, and .tsx files
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off', // Disables unresolved import warnings
        'import/prefer-default-export': 'off', // Disables the preference for default exports
        'no-unused-vars': 'off', // Generates warnings for unused variables
        'react/require-default-props': 'off', // Disables the requirement for default props in React components
        'react/react-in-jsx-scope': 'off', // Disables React import in JSX scope
        'react/jsx-props-no-spreading': 'off', // Generates warnings for JSX props spreading
        'react/function-component-definition': 'off', // Disables function component definition warnings
        'no-shadow': 'off', // Disables shadowing variable warnings
        'import/extensions': 'off', // Disables file extension checks for imports
        'import/no-extraneous-dependencies': 'off', // Disables extraneous dependency checks
        'no-underscore-dangle': 'off', // Disables warnings for underscores in identifiers
        'linebreak-style': 'off', // Disables linebreak style checks
    },
    globals: {
        __IS_DEV__: true, // Specifies __IS_DEV__ as a global variable that is always true
    },
};
