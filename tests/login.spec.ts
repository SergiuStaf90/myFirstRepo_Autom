import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { standardUser, lockedUser } from "../test-data/users.js";

test("Successful login",
    async ({ page }) => {

            const loginPage = new LoginPage(page);
            await loginPage.open();
            await loginPage.login(standardUser.username, standardUser.password );
            await expect(page.getByText("Products")).toBeVisible();
}
);

test("Locked User: Failed login ",
    async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login(lockedUser.username, lockedUser.password );
        await expect(loginPage.errorMessageLocator).toHaveText("Epic sadface: Sorry, this user has been locked out.");
    }
);

