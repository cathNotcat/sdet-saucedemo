import { Page } from '@playwright/test';

export class SidebarComponent {
      constructor(private page: Page) {}

      // Getter
      get closeMenuButton() {
            return this.page.getByTestId('close-menu');
      }
      get inventoryItemMenu() {
            return this.page.getByTestId('inventory-sidebar-link');
      }
      get aboutMenu() {
            return this.page.getByTestId('about-sidebar-link');
      }
      get logoutMenu() {
            return this.page.getByTestId('logout-sidebar-link');
      }
      get resetMenu() {
            return this.page.getByTestId('reset-sidebar-link');
      }

      // Methods
      async clickCloseMenu() {
            await this.closeMenuButton.click();
      }
      async clickAllItems() {
            await this.inventoryItemMenu.click();
      }
      async clickAbout() {
            await this.aboutMenu.click();
      }
      async clickLogout() {
            await this.logoutMenu.click();
      }
      async clickReset() {
            await this.resetMenu.click();
      }


}
