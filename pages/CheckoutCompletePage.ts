import {Page, Locator} from "@playwright/test";

export class CheckoutCompletePage {
    private page: Page;
    public orderConfirmation: Locator;
    private backHomeButton: Locator;
    // private generatePdfButton: Locator;

    constructor(playwrightPage:Page) {
        this.page = playwrightPage;
        this.orderConfirmation = this.page.getByRole("heading",{name:'Thank you for your order!'})
        this.backHomeButton = this.page.getByRole("button",{name: 'Back Home'})
    }

    async goBackHome(){
        await this.backHomeButton.click()
    }


}