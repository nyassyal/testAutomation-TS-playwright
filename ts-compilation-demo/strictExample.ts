function greets(name:string){

    const test :string = `hi`// test is greyed out, because NoUnusedLocals property is true in tsconfig.json




    // console.log(`Hello ${name.toUpperCase()}`);
        console.log(`Hello `); // name is not used, hence its greyed ot because no NoUnusedParams is true in tsconfig.json

}

//greets(null); // This will throw an error because 'null' is not assignable to type 'string'.

//In tsconfig, strict is true, so it will throw an error.

//If tsconfig is empty, the default properties will be as follows:

// Target: ES3

// Module: CommonJS

// Strict mode: ❌ off

// Allow JS: ❌ off

// Source maps: ❌ off

// Root directory: wherever your file is

// OutDir: none, just compiles in-place

// JSX: ❌ not enabled

// Declaration files: ❌ not generated