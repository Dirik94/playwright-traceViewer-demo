import { Page, expect } from '@playwright/test';

export const testComponents = {
    dataTestId: function (testIdName: string) {
        return `[data-test="${testIdName}"]`;
    },

    continue_button_click(page: Page){
        page.locator('[data-test="continue"]').click();
    }
}