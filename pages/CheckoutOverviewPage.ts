import {Page, Locator} from "@playwright/test";


export class CheckoutOverviewPage {
    private page: Page;
    private checkoutOverviewItemLocator: Locator ;
    private finishButtonLocator: Locator;

    constructor(playwrightPage:Page) {
        this.page = playwrightPage;
        this.checkoutOverviewItemLocator = this.page.locator('[data-test="inventory-item"]')
        // this.finishButtonLocator = this.page.locator('[data-test="finish"]');
        this.finishButtonLocator = this.page.getByRole("button", { name: 'Finish' });

    }

    getOverviewItem (productName:string):Locator{
        return this.checkoutOverviewItemLocator.filter({hasText:productName})
    }
    getItemQuantity(productName:string):Locator {
        return this.getOverviewItem(productName).locator('[data-test="item-quantity"]');
    }

   async finishOrder() {
      await this.finishButtonLocator.click();
    }
}