import { Page } from '@playwright/test';
import { base_url } from '../../test-data/url';

export class BasePage {
    protected page: Page;
    protected url: string = base_url;

    constructor(page: Page) {
        this.page = page;
    }

    public async navigate() {
        await this.page.goto(this.url);
    }
}
