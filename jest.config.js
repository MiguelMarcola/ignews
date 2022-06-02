module.exports = {
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTests.ts"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|jsx)$": "<rootDir>/node_modules/babel-jest"
    },
    testEnvironment: "jsdom"
}