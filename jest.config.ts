export default {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  coverageProvider: 'babel',
  coverageReporters: ['html', 'lcov', 'text'],
  errorOnDeprecated: false,
  maxWorkers: '50%',
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  testMatch: [
    '<rootDir>/packages/**/__tests__/**/*spec.[jt]s?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/', '/docs/', './vscode', '/.github/', '/scripts/', '/temp/'],
  setupFiles: ['jest-useragent-mock']
}
