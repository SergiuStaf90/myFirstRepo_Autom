import {Page, Locator} from "@playwright/test";


export class CheckoutPage {
    private page: Page;
    private firstNameLocator: Locator;
    private lastNameLocator: Locator;
    private zipPostalCodeLocator: Locator;
    private checkoutContinueButton: Locator;

    constructor(playwrightPage:Page) {
        this.page = playwrightPage;
        this.firstNameLocator = this.page.getByPlaceholder("First Name");
        this.lastNameLocator = this.page.locator('[id="last-name"]');
        this.zipPostalCodeLocator = this.page.locator('[name="postalCode"]');
        this.checkoutContinueButton = this.page.getByRole("button",{name: 'Continue'});
    }

async fillCustomerInformation (firstName: string, lastName: string, postalCode:string ){
        await this.firstNameLocator.fill(firstName)
        await this.lastNameLocator.fill(lastName)
        await this.zipPostalCodeLocator.fill(postalCode)
        await this.checkoutContinueButton.click()

}

}
