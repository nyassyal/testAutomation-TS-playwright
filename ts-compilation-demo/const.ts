const MAX_RETRIES = 5;

// MAX_RETRIES = 10;  // Error: Cannot assign to 'MAX_RETRIES' because it is a constant.ts(2588)


enum testExecutionStatus{ //enum with default values
    PASSED, 
    FAILED,
    SKIPPED 
}

console.log(testExecutionStatus.PASSED); // Output: 0

enum userRole{ //enum with custom string values
    ADMIN = 'adm01', // if these values are not strings, they will be auto-incremented numbers (0, 1, 2, ...)
    MANAGER =  'mng80', 
    Employee = 'emp53' 
}

console.log(userRole.Employee); // Output: emp53

enum priority{ //enum with custom numeric values
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

console.log(priority.HIGH); // Output: 3

function getRole(role: userRole):string {
    // console.log(`User role is: ${role}`);
    // return role ;
    if(role === userRole.ADMIN){
        console.log(`Access Provided`);
        return `Access Provided`
    }
    console.log(`Access Denied`);
    return `Access Denied`; 
}