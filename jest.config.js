module.exports = {
    testIgnorePatterns: ["/node_modules/", "/.next/"],
    setupFilesAfterEnv: [
        "<rootDir>/src/test/setupTests.ts"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|jsx)$": "<rootDir>/node_modules/babel-jest"
    },
    testEnviroment: "jsdom"
}