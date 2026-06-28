import { test, expect } from '../../src/fixtures/test.fixtures';
import { users } from '../../test-data/users';
import { errorMessages } from '../../test-data/error-messages';

test.describe('Login', ()  => {
    test('user can login successfully',
        { 
            tag: ['@login','@smoke', '@positive']
        }, async ({ loginPage, page }) => {
        
        await loginPage.open();

        await loginPage.login(
            users.validCredentials.username, 
            users.validCredentials.password);

        await expect(page).toHaveURL(/inventory/)
    });

    test('user failed to login with locked out user',
        {
            tag: ['@login','@negative']
        }, async ({ loginPage }) => {
        await loginPage.open();

        await loginPage.login(
            users.lockedOutUser.username, 
            users.lockedOutUser.password);

        await expect(loginPage.errorMessage).toHaveText(errorMessages.login.lockedUser);
    });

    test('user failed to login with invalid password',
        {
            tag: ['@login','@negative']
        }, async ({ loginPage }) => {
        await loginPage.open();

        await loginPage.login(
            users.invalidPassword.username, 
            users.invalidPassword.password);

        await expect(loginPage.errorMessage).toHaveText(errorMessages.login.invalidCredentials);
    });

    test('user failed to login with invalid username',
        {
            tag: ['@login','@negative']
        }, async ({ loginPage }) => {
        await loginPage.open();

        await loginPage.login(
            users.invalidUsername.username, 
            users.invalidUsername.password);

        await expect(loginPage.errorMessage).toHaveText(errorMessages.login.invalidCredentials);
    });

    test('user failed to login with invalid credentials',
        {
            tag: ['@login','@negative']
        }, async ({ loginPage }) => {
        await loginPage.open();

        await loginPage.login(
            users.invalidCredentials.username, 
            users.invalidCredentials.password);

        await expect(loginPage.errorMessage).toHaveText(errorMessages.login.invalidCredentials);
    });
})