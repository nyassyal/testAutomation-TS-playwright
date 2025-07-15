class ParentClassBasePage{
    navigate():void{
        console.log(`Navigating to the base page`);
    }
}

class SubClassLoginPage extends ParentClassBasePage {
    override navigate(): void {
        console.log(`Navigating to the login page 2`);
    }
}

class SubClassLoginPages extends ParentClassBasePage {
    navigate(): void { //Override keywors is optional but recommended
        console.log(`Navigating to the login page 2`);
    }
}

//Use Case in Test Automation

class BaseTest{
    runs(): void {
        console.log(`Running base test`);
    }
}

class LoginTest extends BaseTest {
    override runs(): void {
        console.log(`Running login test`);
    }
}