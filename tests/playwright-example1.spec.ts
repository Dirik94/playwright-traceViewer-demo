import test from './support/fixtures/pages'
import { testComponents } from './support/testComponents';

let itemClass;
let itemDescription;
let itemPrice;
let itemName

test.describe('Make purchase', async () => {

    test('Buy item trough item page', async ({ page, baseURL, login, cart, inventory  }) => {
        await page.goto(baseURL!);
        await login.userName_type('standard_user');
        await login.userName_type('standard_user');
        await login.userName_type('standard_user');
        await login.userPassword_type('secret_sauce');
        await login.login_button_click();

        itemDescription = 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.';
        itemPrice = '$29.99';
        itemName = 'Sauce Labs Backpack';
        await inventory.goItemPage(itemName);
        await inventory.checkItemPrice(itemPrice);
        await inventory.checkItemDescription(itemDescription);
        await inventory.addToCart_button_click(itemName);
        await inventory.shoppingCart_click();

        itemClass = 'cart_item';
        await cart.inventory.checkItemDescription(itemDescription);
        await cart.inventory.checkItemPrice(itemPrice);
        await cart.checkout_button_click();
        await cart.stepOne.firstName_type('testName');
        await cart.stepOne.lastName_type('testSurname');
        await cart.stepOne.postalCode_type('11111');
        await testComponents.continue_button_click(page);
        await cart.stepTwo.verifyItem_isVisible(itemName);
        await cart.stepTwo.verifyTotalPrice_isVisible('$32.39');
        await cart.stepTwo.finish_button_click();

        await cart.complete.verifySuccessPage_isVisible();
    });

    test('Buy item trough main page', async ({ page, baseURL, login, cart, inventory  }) => {
        await page.goto(baseURL!);
        await login.userName_type('standard_user');
        await login.userPassword_type('secret_sauce');
        await login.login_button_click();

        itemDescription = 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.';
        itemPrice = '$29.99';
        itemName = 'Sauce Labs Backpack';
        await inventory.checkItemPrice(itemPrice);
        await inventory.checkItemDescription(itemDescription);
        await inventory.addToCart_button_click(itemName);
        await inventory.shoppingCart_click();

        itemClass = 'cart_item';
        await cart.inventory.checkItemDescription(itemDescription);
        await cart.inventory.checkItemPrice(itemPrice);
        await cart.checkout_button_click();
        await cart.stepOne.firstName_type('testName');
        await cart.stepOne.lastName_type('testSurname');
        await cart.stepOne.postalCode_type('11111');
        await testComponents.continue_button_click(page);
        await cart.stepTwo.verifyItem_isVisible(itemName);
        await cart.stepTwo.verifyTotalPrice_isVisible('$32.39');
        await cart.stepTwo.finish_button_click();

        await cart.complete.verifySuccessPage_isVisible();
    });
});