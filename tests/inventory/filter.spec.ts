import { test, expect } from '../../src/fixtures/test.fixtures';
import { users } from '../../test-data/users';
import { sortOptions } from '../../test-data/sort-options';
import { inventoryMetadata } from '../../src/utils/allure';
import * as allure from 'allure-js-commons';

test.describe('Inventory', ()  => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.open();
        await loginPage.login(
            users.validCredentials.username, 
            users.validCredentials.password
        );
        await inventoryMetadata();
        await allure.story("Filter Products");
    });

    test('should filter products by ascending name',
        {
            tag: ['@inventory-filter', '@positive']
        }, async ({ inventoryPage }) => {
        await inventoryPage.sortProducts(sortOptions.nameAsc);
        const actualNames = await inventoryPage.getProductNames();
        const expectedNames = [...actualNames].sort();

        expect(actualNames).toEqual(expectedNames);
    });

    test('should filter products by descending name',
        {
            tag: ['@inventory-filter', '@positive']
        }, async ({ inventoryPage }) => {
        await inventoryPage.sortProducts(sortOptions.nameDesc);
        const actualNames = await inventoryPage.getProductNames();
        const expectedNames = [...actualNames].sort().reverse();

        expect(actualNames).toEqual(expectedNames);
    });

    test('should filter products by ascending price',
        {
            tag: ['@inventory-filter', '@positive']
        }, async ({ inventoryPage }) => {
        await inventoryPage.sortProducts(sortOptions.priceAsc);
        const actualPrices = await inventoryPage.getProductPrices();
        const expectedPrices = [...actualPrices].sort((a, b) => a - b);

        expect(actualPrices).toEqual(expectedPrices);
    });

    test('should filter products by descending price',
        {
            tag: ['@inventory-filter', '@positive']
        }, async ({ inventoryPage }) => {
        await inventoryPage.sortProducts(sortOptions.priceDesc);
        const actualPrices = await inventoryPage.getProductPrices();
        const expectedPrices = [...actualPrices].sort((a, b) => a - b).reverse();

        expect(actualPrices).toEqual(expectedPrices);
    });
});