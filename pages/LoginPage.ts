import { Page, Locator, } from "@playwright/test";

export class LoginPage {
         page :Page ;
         usernameLocator: Locator;
         passwordLocator: Locator;
         loginButtonLocator: Locator;
    constructor(page: Page) {
        this.page = page;
        this.usernameLocator = this.page.locator('#user-name');
        this.passwordLocator = this.page.locator('#password');
        this.loginButtonLocator = this.page.locator('#login-button');

    }
    async open(){
       await this.page.goto("https://www.saucedemo.com/");

    }
    async login(username: string, password: string){
        await this.usernameLocator.fill(username)
        await this.passwordLocator.fill(password)
        await this.loginButtonLocator.click()

    }



}