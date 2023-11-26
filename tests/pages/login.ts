import {Page, expect} from '@playwright/test';
import { testComponents } from '../support/testComponents';

export class Login {
    constructor(public page: Page) {
        this.page = page;
    }

    async userName_type(text: string){
        const userName = this.page.locator(testComponents.dataTestId('username'));
        await userName.fill(text);
        await expect(userName).toHaveValue(text);
    }

    async userPassword_type(text: string){
        const password = this.page.locator(testComponents.dataTestId('password'));
        await password.fill(text);
        await expect(password).toHaveValue(text);
    }

    async login_button_click(){
        await this.page.locator(testComponents.dataTestId('login-button')).click();
    }
}
