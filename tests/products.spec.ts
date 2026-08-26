import {expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
// import { ProductsPage } from "../pages/ProductsPage.js";
// import { CartPage } from "../pages/CartPage.js";
// import { CheckoutPage } from "../pages/CheckoutPage.js";
// import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage.js";
// import { CheckoutCompletePage } from "../pages/CheckoutCompletePage.js";
import { standardUser } from "../test-data/users.js";
import { standardCustomer } from "../test-data/customers.js";
//import new test from fixture page
import { test } from "../fixtures/pageFixtures.js";
import { products } from "../test-data/products.js";
import {formatProduct, verifyOverviewProduct} from "../Functions_and_Helpers/Functions.js";

//hook
test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open()
    await loginPage.login(standardUser.username,standardUser.password)
});

for (const product of products) {
    // test(`Add ${product.name} to cart` ,
    // added ${template literal} s test can show prod + price
        test(`Add ${formatProduct(product.name , product.price)} to cart` ,
    //added fixtures
    async ({productsPage, cartPage, checkoutPage, checkoutOverviewPage, checkoutCompletePage }) => {
        // const productsPage = new ProductsPage(page);
        // const cartPage = new CartPage(page);
        // const checkoutPage = new CheckoutPage(page);
        // const checkoutOverviewPage = new CheckoutOverviewPage(page);
        // const checkoutCompletePage = new CheckoutCompletePage(page);
         await productsPage.addToCart(product.name);
         await expect(productsPage.cartBadgeLocator).toHaveText("1")
         await productsPage.openCart()
         await expect(cartPage.getCartItem(product.name)).toBeVisible()
         await cartPage.doCheckout()
         await checkoutPage.fillCustomerInformation(standardCustomer.firstName, standardCustomer.lastName,standardCustomer.postalCode)
         await expect (checkoutOverviewPage.getOverviewItem (product.name)).toBeVisible()
         await expect (checkoutOverviewPage.getItemQuantity(product.name)).toHaveText("1")
         await expect (checkoutOverviewPage.getItemPrice(product.name)).toHaveText(product.price)
         await checkoutOverviewPage.finishOrder()
         await expect(checkoutCompletePage.orderConfirmation).toHaveText("Thank you for your order!")
         await checkoutCompletePage.goBackHome()
    })
}

test(`Add ${products.length} products to cart` ,
    async ({productsPage, cartPage, checkoutPage, checkoutOverviewPage, checkoutCompletePage }) => {
        for (const product of products) {
            await productsPage.addToCart(product.name);
        }
        await expect(productsPage.cartBadgeLocator).toHaveText(products.length.toString())
        await productsPage.openCart()

        for (const product of products) {
            await expect(cartPage.getCartItem(product.name)).toBeVisible()
        }
        await cartPage.doCheckout()
        await checkoutPage.fillCustomerInformation(standardCustomer.firstName, standardCustomer.lastName,standardCustomer.postalCode)
        for (const product of products) {
            await verifyOverviewProduct(checkoutOverviewPage,product,1)
            //created a function to do the bellow assertion
            // await expect (checkoutOverviewPage.getOverviewItem (product.name)).toBeVisible()
            // await expect (checkoutOverviewPage.getItemQuantity(product.name)).toHaveText("1")
            // await expect (checkoutOverviewPage.getItemPrice(product.name)).toHaveText(product.price)
        }
        await checkoutOverviewPage.finishOrder()
        await expect(checkoutCompletePage.orderConfirmation).toHaveText("Thank you for your order!")
        await checkoutCompletePage.goBackHome()
    })