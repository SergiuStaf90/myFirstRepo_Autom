import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { ProductsPage } from "../pages/ProductsPage.js";
import { standardUser } from "../test-data/users.js";


test("Add items to cart" ,
    async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        await loginPage.open()
        await loginPage.login(standardUser.username,standardUser.password)
        await  productsPage.addToCart("Sauce Labs Backpack");
        await expect(productsPage.cartBadgeLocator).toHaveText("1")
    }
)