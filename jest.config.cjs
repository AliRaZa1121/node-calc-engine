module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest", // If using TypeScript
  },
  testEnvironment: "node",
  // If you're using ESM, you may need to adjust the transformIgnorePatterns
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
