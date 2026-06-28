import { test as base, expect } from '@playwright/test'
import { LoginPage } from '../pages/login.page'
import { InventoryPage } from '../pages/inventory.page'

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

export { expect }