//filter -> keep only what you need

let numbers = [1,2,3,4,5]

let evenNumbers = numbers.filter(num=>num%2===0)// if condition is not satisfied, prints empty array
console.log(evenNumbers)

// automation based scenario

let results = [{testCaseID: 1, status: 'pass'},{testCaseID: 2, status: 'fail'} ]
let failedTests = results.filter(r=>r.status==='fail')
console.log(failedTests)