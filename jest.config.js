const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // ambiente do navegador - testar componentes
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // mapeia imports do tipo @/...
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // configurar Jest/RTL
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
  ],
}

module.exports = createJestConfig(customJestConfig)
