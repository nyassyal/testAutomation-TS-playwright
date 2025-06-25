function timeOut(logMsg){
    setTimeout(() => {
        logMsg(`Time Out 3 sec`);
    }, 3000);
}

timeOut(console.log);
