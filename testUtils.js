const describe = (testContext, itFunction) => {
    console.log('\x1b[33m%s\x1b[0m', testContext);
    itFunction();
}

const it = (expectedResults, testMatcher) => {
    console.log('\x1b[33m%s\x1b[0m', `      ${expectedResults}`);
    testMatcher()
}

const expect = (testValue) => new Expect(testValue);

class Expect {
    constructor(testValue) {
        this.testValue = testValue;
    }

    error(comparisonValue) {
        console.log("\x1b[31m", `      Error: expected ${this.testValue} to equal ${comparisonValue}`)
    }

    pass(comparisonValue) {
        console.log("\x1b[32m", `      Passed: expected ${this.testValue} to equal ${comparisonValue}`);
    }

    toBe(value) {
        if (value === this.testValue) {
            this.pass(value);
        } else {
            this.error(value)
        }
    }
}

const testUtils = {
    describe,
    it,
    expect
}

module.exports = testUtils