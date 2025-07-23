type TestPass = {status: 'pass', duration: number}
;
type TestFail = {status: 'fail', reason: string};
type TestSkip = {status: 'skip', state: string};

type TestResult = TestPass | TestFail | TestSkip;

function printResult(result: TestResult) {
    // 
    
    switch (result.status) {
        case 'pass':
            console.log(`Test passed in ${result.duration}ms`);
            break;
        case 'fail':
            console.log(`Test failed: ${result.reason}`);
            break;
        case 'skip':
            console.log(`Test skipped: ${result.state}`);
            break;
    }
}

printResult({status: 'pass', duration: 150});
printResult({status: 'fail', reason: 'Element not found'});
printResult({status: 'skip', state: 'Not applicable'});