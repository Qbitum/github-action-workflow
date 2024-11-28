import { BasePage, Button, Label, Dropdown, TextBox, LocatorsStrategy } from '@qbitum/qtaf-ui-core/dist/element_loader'

export class Homepage extends BasePage {

    private homepage_url: string = 'https://productionadminqa.makeitmes.com/homepage'
    //private homepage_url: string = 'https://productionadmindev.makeitmes.com/homepage'  
    private btn_order: string = "//*[text()='Order']"
    private btn_plan: string = "//*[text()='Plan']"
    private btn_catalog: string = "//*[text()='Catalogs']"
    private btn_silhouette: string = "//*[text()='Silhouettes']"
    private btn_scheduling: string = "//*[text()='Scheduling']"
    private btn_login: string = '#kc-login'


    public home_page_url_verification() {
        cy.url().should('eq', this.homepage_url);
        return this
    }

    public click_order_button() {
        new Button(this.btn_order, LocatorsStrategy.XPATH).click()
        return this

    }

    public click_plan_button() {
        new Button(this.btn_plan, LocatorsStrategy.XPATH).click()
        return this

    }

    public click_catelog_button() {
        new Button(this.btn_catalog, LocatorsStrategy.XPATH).click()
        return this

    }

    public click_silhouette_button() {
        new Button(this.btn_silhouette, LocatorsStrategy.XPATH).click()
        return this

    }

    public click_scheduling_button() {
        new Button(this.btn_scheduling, LocatorsStrategy.XPATH).click()
        return this

    }
}