import { Locator, Page } from '@playwright/test';

export class LoginPage {

    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(private readonly page: Page) {

        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');

    }
    async navigate(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/');
    }

}