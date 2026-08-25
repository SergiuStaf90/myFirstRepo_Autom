import {Page, Locator} from "@playwright/test";
// import {ProductName} from "../test-data/products.js";
import type { ProductName } from "../test-data/products.js";

export class ProductsPage {
        private page :Page ;
        private inventoryItemLocator : Locator;
        public cartBadgeLocator : Locator;
        private shoppingCartLinkLocator : Locator;

    constructor(playwrightPage:Page) {
        this.page = playwrightPage;
        this.inventoryItemLocator = this.page.locator("[data-test='inventory-item']");
        this.cartBadgeLocator = this.page.locator("[data-test='shopping-cart-badge']")
        this.shoppingCartLinkLocator = this.page.locator("[data-test='shopping-cart-link']")
    }

    async addToCart (productName :ProductName  ){
            const filteredProduct = this.inventoryItemLocator.filter({
                        hasText: productName
        })
            await filteredProduct.getByRole("button", { name: "Add to cart" }).click()
    }

     async openCart(){
        await this.shoppingCartLinkLocator.click()
     }


}