import { BasePage, Button, Label, Dropdown, TextBox, LocatorsStrategy } from '@qbitum/qtaf-ui-core/dist/element_loader'
import { Homepage } from './homapage'

export class Login extends BasePage {

    private txt_username: string = "//*[@name='username']"
    private txt_password: string = '#password'
    private btn_login: string = '#kc-login'
    private txt_message: string = '#input-error'
    private txt_loginPage_text: string = ".titile-container"
    private btn_login_text: string = "//*[@id='kc-login']"
    private txt_username_placeholder: string = "//input[@placeholder='Username or Email']"
    private txt_password_placeholder: string = "//input[@placeholder='Password']"


    public visit_url(): Login {
        cy.visit("https://productionadminqa.makeitmes.com/homepage", { failOnStatusCode: false })
        //cy.visit("https://productionadmindev.makeitmes.com/homepage", { failOnStatusCode: false })
        return this
    }

    public step_fill_username(username: string): Login {
        new TextBox(this.txt_username, LocatorsStrategy.XPATH).enterText(username)
        return this
    }

    public step_fill_password(password: string): Login {
        new TextBox(this.txt_password, LocatorsStrategy.CYPRESS_GET).enterText(password)
        return this
    }

    public step_click_login() {
        new Button(this.btn_login, LocatorsStrategy.CYPRESS_GET).click()
        return this
    }

    public password_placeholder_validation(text: string): Login {
        cy.xpath(this.txt_password_placeholder).should('have.attr', 'placeholder', text)
        return this
    }

    public username_placeholder_validation(text: string): Login {
        cy.xpath(this.txt_username_placeholder).should('have.attr', 'placeholder', text)
        return this
    }

    public message_validation(value: string) {
        new Label(this.txt_message, LocatorsStrategy.CYPRESS_GET).isContains(value)
        return new Homepage()

    }

    public login_page_text_validation(value: string) {
        new Label(this.txt_loginPage_text, LocatorsStrategy.CYPRESS_GET).isContains(value)
        return this

    }

    public login_button_text_validation(value: string) {
        cy.xpath(this.btn_login_text).contains(value)
        return this

    }
}