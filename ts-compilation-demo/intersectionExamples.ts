type Locatable = {locator:string};
type Clickable = {click():void}

type Button = Locatable & Clickable;

const submitButton: Button = {
    locator: "#submit",
    click: () => {
        console.log("Button clicked");
    }
}