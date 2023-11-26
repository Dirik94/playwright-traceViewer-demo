import {Page, expect} from '@playwright/test';
import { testComponents } from '../support/testComponents';
import { Inventory } from './inventory';

export class Cart {
    constructor(public page: Page) {
        this.page = page;
    }

    async checkout_button_click(){
        await this.page.locator(testComponents.dataTestId('checkout')).click();
    }

    inventory = new Inventory(this.page);

    stepOne = {
        page: this.page,

        async firstName_type(firstName: string){
            await this.page.locator(testComponents.dataTestId('firstName')).fill(firstName);
        },

        async lastName_type(firstName: string){
            await this.page.locator(testComponents.dataTestId('lastName')).fill(firstName);
        },

        async postalCode_type(firstName: string){
            await this.page.locator(testComponents.dataTestId('postalCode')).fill(firstName);
        },
    }

    stepTwo = {
        page: this.page,

        async verifyItem_isVisible(itemName: string){
            await expect(this.page.getByRole('link', { name: `${itemName}` })).toBeVisible();
        },

        async verifyTotalPrice_isVisible(price: string){
            await expect(this.page.getByText(`Total: ${price}`)).toBeVisible();
        },

        async finish_button_click(){
            await this.page.locator(testComponents.dataTestId('finish')).click();
        }
    }

    complete = {
        page: this.page,

        async verifySuccessPage_isVisible(){
            await this.page.getByRole('heading', { name: 'Thank you for your order!' }).click();
        }
    }
}