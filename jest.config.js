// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  verbose: true,
  clearMocks: true,
  automock: false,
  setupFiles: [
    "./setupJest.js"
  ],
  globals: {
    "ts-jest": {
      "diagnostics": false,
      "tsConfig": "tsconfig.json"
    }
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    "src/**/*.{js,ts,tsx}",
    "!**/node_modules/**"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  moduleDirectories: [
    "src",
    "src/app",
    "src/app/middleware",
    "src/app/actions",
    "src/app/components",
    "src/app/store",
    "src/app/utilities",
    "node_modules"
  ],
  moduleNameMapper: {
    "^@src\/(.*)$": "<rootDir>/src/$1",
    "^@app\/(.*)$": "<rootDir>/src/app/$1",
    "^@middleware\/(.*)$": "<rootDir>/src/app/middleware/$1",
    "^@actions\/(.*)$": "<rootDir>/src/app/actions/$1",
    "^@components\/(.*)$": "<rootDir>/src/app/components/$1",
    "^@store\/(.*)$": "<rootDir>/src/app/store/$1",
    "^@utilities\/(.*)$": "<rootDir>/src/app/utilities/$1"
  },
};
