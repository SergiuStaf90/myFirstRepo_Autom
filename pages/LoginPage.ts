import {Page, Locator, expect,} from "@playwright/test";

export class LoginPage {
        private page :Page ;
        private usernameLocator: Locator;
        private passwordLocator: Locator;
        private loginButtonLocator: Locator;
        public errorMessageLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameLocator = this.page.locator('#user-name');
        this.passwordLocator = this.page.locator('#password');
        this.loginButtonLocator = this.page.locator('#login-button');
        this.errorMessageLocator = this.page.locator('[data-test="error"]');
    }
    async open(){
       await this.page.goto("https://www.saucedemo.com");

    }
    async login(username: string, password: string){
        await this.usernameLocator.fill(username)
        await this.passwordLocator.fill(password)
        await this.loginButtonLocator.click()

    }



}