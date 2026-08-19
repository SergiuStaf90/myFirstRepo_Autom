import {Page, Locator} from "@playwright/test";

export class CartPage {
    private page: Page;
    private cartItemLocator: Locator;
    private checkoutButtonLocator:Locator;

    constructor(playwrightPage:Page) {
        this.page = playwrightPage;
        this.cartItemLocator = this.page.locator("[data-test='inventory-item']")
        this.checkoutButtonLocator = this.page.getByRole("button",{name: 'checkout'});
    }

    getCartItem(productName: string): Locator{
      return this.cartItemLocator.filter({hasText:productName})
    }

    async doCheckout(){
        await this.checkoutButtonLocator.click()
    }
}
