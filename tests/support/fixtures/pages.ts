import { test as base } from '@playwright/test';
import { Cart } from '../../pages/cart';
import { Inventory } from '../../pages/inventory';
import {Login} from '../../pages/login'

type MyFixtures = {
    login: Login;
    cart: Cart;
    inventory: Inventory;
};

const test = base.extend<MyFixtures>({
    login: async ({ page }, use) => {
        // Set up the fixture.
        const login = new Login(page);

        // Use the fixture value in the test.
        await use(login);
    },

    inventory: async ({ page }, use) => {
        await use(new Inventory(page));
    },

    cart: async ({ page }, use) => {
        await use(new Cart(page));
    },
});

export default test;
export const expect = test.expect;