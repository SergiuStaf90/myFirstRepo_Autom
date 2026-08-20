import {test as base} from "@playwright/test";
import { ProductsPage } from "../pages/ProductsPage.js";
import { CartPage } from "../pages/CartPage.js";
import { CheckoutPage } from "../pages/CheckoutPage.js";
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage.js";
import { CheckoutCompletePage } from "../pages/CheckoutCompletePage.js";

export const test = base.extend<{
    productsPage: ProductsPage
    cartPage : CartPage
    checkoutPage : CheckoutPage
    checkoutOverviewPage : CheckoutOverviewPage
    checkoutCompletePage :CheckoutCompletePage
}>({
    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage(page);
        await use(productsPage);
    },

    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    },
    checkoutOverviewPage: async ({ page }, use) => {
        const checkoutOverviewPage = new CheckoutOverviewPage(page);
        await use(checkoutOverviewPage);
    },
    checkoutCompletePage: async ({ page }, use) => {
        const checkoutCompletePage = new CheckoutCompletePage(page);
        await use(checkoutCompletePage);
    }
});