import { BasePage } from "./base.page";

export class InventoryPage extends BasePage {
    // Locators
    get filterDropdown() {
        return this.page.getByTestId('product_sort_container');
    }
    
    // Dynamic locators
    async sortProducts(sortValue: string) {
        await this.page.getByTestId('product-sort-container').selectOption(sortValue);
    }
    
    async clickAddToCart(productName: string) {
        await this.page.getByTestId(`add-to-cart-${productName}`).click();
    }
    async removeAddToCart(productName: string) {
        await this.page.getByTestId(`remove-${productName}`).click();
    }

    // Methods
    async getProductNames(): Promise<string[]> {
        return await this.page.getByTestId('inventory-item-name').allTextContents();
    }

    async getProductPrices(): Promise<number[]> {
        const prices = await this.page.getByTestId('inventory-item-price').allTextContents();

        return prices.map(price =>
            Number(price.replace('$', ''))
        );
    }
}