import {Page, Locator} from "@playwright/test";
// import {ProductName} from "../test-data/products.js";
import type { ProductName } from "../test-data/products.js";

export class ProductsPage {
        private page :Page ;
        private inventoryItemLocator : Locator;
        private cartBadgeLocator : Locator;
        private shoppingCartLinkLocator : Locator;

    constructor(playwrightPage:Page) {
        this.page = playwrightPage;
        this.inventoryItemLocator = this.page.locator("[data-test='inventory-item']");
        this.cartBadgeLocator = this.page.locator("[data-test='shopping-cart-badge']")
        this.shoppingCartLinkLocator = this.page.locator("[data-test='shopping-cart-link']")
    }

     get cartBadge(): Locator {
         return this.cartBadgeLocator;
    }

    async addToCart (productName :ProductName  ){
            const filteredProduct = this.inventoryItemLocator.filter({
                        hasText: productName
        })
            await filteredProduct.getByRole("button", { name: "Add to cart" }).click()
    }

    async addMultipleProducts( ...productNames :ProductName[] ) {
        for (const productName of productNames){
            await this.addToCart(productName);
        }

}

     async openCart(){
        await this.shoppingCartLinkLocator.click()
     }


}