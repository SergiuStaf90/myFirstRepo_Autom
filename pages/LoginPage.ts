import { Locator, Page } from '@playwright/test';

export class LoginPage {

    private readonly usernameInput: Locator;

    constructor(private readonly page: Page) {
        this.usernameInput = page.locator('#user-name');
    }
}