export class customLogger{
    private timestamp() : string{
        return new Date().toISOString();
    }

    info(message:string, ...args:any[]) {
        console.log(`[INFO] [${this.timestamp()}] ${message}`, ...args);
    }

    error(message:string, ...args:any[]) {
        console.error(`\x1b[31m`,`[ERROR] [${this.timestamp()}] ${message}`, ...args); //ANSI code of red in error
    }

    warn(message:string, ...args:any[]) {
        console.warn(`\x1b[38;2;255;165;0m`,`[WARN] [${this.timestamp()}] ${message}`, ...args); //ANSI code of orange in warning
    }
}