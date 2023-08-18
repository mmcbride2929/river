const { resolve } = require('path');

module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  transform: {
    '^.+\\.[t|j]sx?$': ['esbuild-jest', { loader: 'tsx', target: 'es2019' }],
  },
  testEnvironment: 'jest-environment-jsdom', // Update this line
  setupFilesAfterEnv: [resolve(__dirname, 'src/setupTests.js')],
};
