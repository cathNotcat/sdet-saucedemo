import { Page } from '@playwright/test';

export class HeaderComponent {
  constructor(private page: Page) {}

    // Getter
    get cartButton() {
        return this.page.getByTestId('shopping_cart_link');
    } 

    get shoppingCartBadge() {
        return this.page.getByTestId('shopping_cart_badge');
    }

    get menuButton() {
        return this.page.getByTestId('open-menu');
    }

    async getShoppingCartCount(): Promise<number> {
        return Number(await this.shoppingCartBadge.textContent());
    }

    // Methods
    async openCart() {
        await this.cartButton.click();
    }

    async openMenu() {
        await this.menuButton.click();
    }

}