import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import vue from 'eslint-plugin-vue'
import tailwind from 'eslint-plugin-tailwindcss'

const isDevelopment = process.env.NODE_ENV !== 'production'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,vue}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        process: 'readonly'  // Add process to globals
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      'vue': vue,
      'tailwindcss': tailwind
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      
      // Vue specific rules
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        }
      }],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/multi-word-component-names': 'error',
      'vue/no-unused-components': 'error',
      'vue/no-v-html': 'warn',
      
      // Tailwind specific rules
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
      
      // General rules
      'no-console': isDevelopment ? 'off' : 'warn',
      'no-debugger': isDevelopment ? 'off' : 'warn',
      'quotes': ['error', 'single'],
      'semi': ['error', 'never']
    }
  },
  // Vue SFC specific configuration
  {
    files: ['**/*.vue'],
    rules: {
      'vue/component-tags-order': ['error', {
        order: ['script', 'template', 'style']
      }],
      'vue/block-order': ['error', {
        order: ['script', 'template', 'style']
      }]
    }
  },
  prettier // Must be last to override other formatting rules
]