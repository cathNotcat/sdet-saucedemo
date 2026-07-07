import * as allure from 'allure-js-commons';

export async function loginMetadata() {
    await allure.epic("Authentication");
    await allure.feature("Login");
}

export async function inventoryMetadata() {
    await allure.epic("Inventory");
    await allure.feature("Inventory - Filter");
}