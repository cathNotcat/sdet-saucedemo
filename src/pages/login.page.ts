import { BasePage } from "./base.page";

export class LoginPage extends BasePage{
    private usernameInput = this.page.getByTestId('username');
    private passwordInput = this.page.getByTestId('password');
    private loginButton = this.page.getByTestId('login-button');

    readonly errorMessage = this.page.getByTestId('error');

    public async open() {
        await this.page.goto('/');
    }

    public async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}