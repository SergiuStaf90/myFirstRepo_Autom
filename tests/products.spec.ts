import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { ProductsPage } from "../pages/ProductsPage.js";
import { CartPage } from "../pages/CartPage.js";
import { CheckoutPage } from "../pages/CheckoutPage.js";
import { standardUser } from "../test-data/users.js";
import { standardCustomer } from "../test-data/customers.js";


test("Add items to cart" ,
    async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
         await loginPage.open()
         await loginPage.login(standardUser.username,standardUser.password)
         await productsPage.addToCart("Sauce Labs Backpack");
         await expect(productsPage.cartBadgeLocator).toHaveText("1")
         await productsPage.openCart()
         await expect(cartPage.getCartItem("Sauce Labs Backpack")).toBeVisible()
         await cartPage.doCheckout()
         await checkoutPage.fillCustomerInformation(standardCustomer.firstName, standardCustomer.lastName,standardCustomer.postalCode)

    }
)