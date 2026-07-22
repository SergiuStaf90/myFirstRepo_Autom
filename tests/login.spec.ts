import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Open SauceDemo login page', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

});