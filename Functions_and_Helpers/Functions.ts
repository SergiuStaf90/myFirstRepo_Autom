import {CheckoutOverviewPage} from "../pages/CheckoutOverviewPage.js";
import {ProductAndPrice} from "../test-data/products.js";
import {expect} from "@playwright/test";


export function formatProduct(product : string, price :string) :string {
 return `${product} - ${price}`
}
export async function verifyOverviewProduct(
    checkoutOverviewPage: CheckoutOverviewPage,
    productAndPrice : ProductAndPrice,
    expectedQuantity: number
): Promise<void> {
    const {name, price} = productAndPrice;
    await expect(checkoutOverviewPage.getOverviewItem(name)).toBeVisible()
    await expect(checkoutOverviewPage.getItemQuantity(name)).toHaveText(expectedQuantity.toString())
    await expect(checkoutOverviewPage.getItemPrice(name)).toHaveText(price)
}

