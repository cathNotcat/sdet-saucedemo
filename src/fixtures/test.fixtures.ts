import { test as base, expect } from '@playwright/test'
import { LoginPage } from '../pages/login.page'
import { InventoryPage } from '../pages/inventory.page'
import * as allure from 'allure-js-commons';

export const test = base.extend<{
  loginPage: LoginPage,
  inventoryPage: InventoryPage,
}>({

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page))
  }
})

test.afterEach(async ({ page }, testInfo) => {
  const screenshot = await page.screenshot({
    fullPage: true,
  });

  await allure.attachment(
    `${testInfo.title} Screenshot`,
    screenshot,
    'image/png'
  );
});

export { expect }