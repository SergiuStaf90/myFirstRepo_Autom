import {Page, Locator} from "@playwright/test";

export class ProductsPage {
        private page :Page ;
        private inventoryItemLocator : Locator;
        // private cartBadgeLocator : Locator;

    constructor(playwrightPage:Page) {
        this.page = playwrightPage;
        this.inventoryItemLocator = this.page.locator("[data-test='inventory-item']");
    }

    async addToCart (productName :string  ){
            const filteredProduct = this.inventoryItemLocator.filter({
                        hasText: productName
        })
            await filteredProduct.getByRole("button", { name: "Add to cart" }).click()
    }



}