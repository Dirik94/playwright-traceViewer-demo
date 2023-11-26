import {Page, expect} from '@playwright/test';

export class Inventory {
    constructor(public page: Page) {
        this.page = page;
    }

    async goItemPage(itemName: string){
        await this.page.getByRole('link', { name: `${itemName}` }).first().click();
    }

    async checkItemPrice(price: string){
        await expect(this.page.getByText(price)).toBeVisible();
    }

    async checkItemDescription(description: string){
        await expect(this.page.getByText(description)).toBeVisible();
    }

    async addToCart_button_click(itemName: string){
        await this.page.locator(`:below(:text("${itemName}"))`).getByText('Add to cart').first().click();
    }

    async shoppingCart_click(){
        await this.page.locator('.shopping_cart_link').click();
    }
}