module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.svg$": "jest-svg-transformer"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"],
    "moduleNameMapper": {
        "@assets/(.*)": "<rootDir>/src/assets/$1",
        "@app/(.*)": "<rootDir>/src/components/$1",
        "@services/(.*)": "<rootDir>/src/services/$1",
        "@models/(.*)": "<rootDir>/src/models/$1"
    },
}