import {CheckoutOverviewPage} from "../pages/CheckoutOverviewPage.js";
import {ProductName} from "../test-data/products.js";
import {expect} from "@playwright/test";


function showPrice(productPrice: string) {
    console.log(productPrice);
}

export function formatProduct(product : string, price :string) :string {
 return `${product} - ${price}`
}

export async function verifyOverviewProduct(
    checkoutOverviewPage: CheckoutOverviewPage,
    productName: ProductName,
    expectedQuantity: number,
    expectedPrice: string
): Promise<void> {
    await expect(checkoutOverviewPage.getOverviewItem(productName)).toBeVisible()
    await expect(checkoutOverviewPage.getItemQuantity(productName)).toHaveText(expectedQuantity.toString())
    await expect(checkoutOverviewPage.getItemPrice(productName)).toHaveText(expectedPrice)
}