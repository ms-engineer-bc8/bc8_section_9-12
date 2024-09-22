module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: 'tsconfig.json',
      }
    ],
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
