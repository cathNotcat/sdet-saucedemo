import { BasePage } from "./base.page";

export class InventoryPage extends BasePage {
    // Locators
    private filterDropdown = this.page.getByTestId('product_sort_container');
    private shoppingCartBadge = this.page.getByTestId('shopping_cart_badge');
    
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
        return await this.page
            .getByTestId('inventory-item-name')
            .allTextContents();
    }

    async getProductPrices(): Promise<number[]> {
        const prices = await this.page
            .getByTestId('inventory-item-price')
            .allTextContents();

        return prices.map(price =>
            Number(price.replace('$', ''))
        );
    }


    
    // public async getShoppingCartCount(): Promise<string> {
    //     return await this.shoppingCartBadg.textContent();
    // }
}