module.exports={
    
    testPathIgnorePatterns:["/node_modules/","/.next"],
    //array de arqu que jest executa antes de executar os testes
    setupFilesAfterEnv:[
        "<rootDir>/src/tests/setupTests.ts"
    ],
    transform:{
        "^.+\\.(js|jsx|ts|tsx|svg)$" : "<rootDir>/node_modules/babel-jest",
        '^.+\\.(ts|js|html|svg)$': 'ts-jest',
       
    },
    //ambiente
    //cria uma representacao da dom em js
    testEnvironment: 'jsdom'
}