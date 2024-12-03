//import { Login } from 'page-objects-and-services/page-objects/login.ts'
//import { Homepage } from 'page-objects-and-services/page-objects/homapage.ts'
import { Login } from '../../../page-objects-and-services/page-objects/login';
import { Homepage } from '../../../page-objects-and-services/page-objects/homapage';

const login = new Login();
const homepage = new Homepage();


describe("Login page verification", () => {

    beforeEach("visit URL", () => {
        login.visit_url()
    })

    it("Test login text validation", () => {
        login.login_page_text_validation("Login")
    })

    it("Password placeholder text validation", () => {
        login.password_placeholder_validation("Passw")
    })

    it("Username placeholder text validation", () => {
        login.username_placeholder_validation("Username or Email")
    })


    it("Test login button text validation", () => {
        login.login_button_text_validation("LOGIN")
    })

    it("Test login using valid username and invalid password", () => {
        login.step_fill_username("fauser1")
            .step_fill_password("fa1233")
            .step_click_login()
            .message_validation("Invalid Username or Password.")
    })

    it("Test login using invalid username and valid password", () => {
        login.step_fill_username("fauser11")
            .step_fill_password("fa123")
            .step_click_login()
            .message_validation("Invalid Username or Password.")
    })

    it("Successfull login using valid username and passwordlogin page", () => {
        login.step_fill_username("fauser1")
            .step_fill_password("fa123")
            .step_click_login()
        homepage.home_page_url_verification()
    })

})