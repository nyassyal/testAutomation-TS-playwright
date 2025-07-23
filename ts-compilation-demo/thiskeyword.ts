class TestRunner{
    testName = `LoginTest`

    run(){
        console.log(`running ${this.testName}`);
    }

}

const testRunner = new TestRunner();
testRunner.run(); // Output: running LoginTest

const runner = new TestRunner();
setTimeout(runner.run, 1000) // Output: running undefined
// This happens because `this` inside `run` refers to the global context, not the `TestRunner` instance.

setTimeout(() => {
    runner.run(); // Output: running LoginTest
}, 1000); // Using arrow function to preserve `this` context