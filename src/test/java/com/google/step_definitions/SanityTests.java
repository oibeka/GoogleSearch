package com.google.step_definitions;

import com.google.utilities.Driver;
import com.google.utilities.ConfigurationReader;
import com.google.pages.Search;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.concurrent.TimeUnit;

import static com.google.utilities.BrowserUtils.*;

public class SanityTests {

    Search searchPages = new Search();

    @Given("^user is on the home page$")
    public void user_is_on_the_home_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
        Driver.getDriver().manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    }

    @When("^user inputs INTURN keyword in the search field$")
    public void user_inputs_INTURN_keyword_in_the_search_field() {
        searchPages.enterText();
        searchPages.pressEnter();

    }

    @When("^clicks inturn link$")
    public void clicks_inturn_link() {
        clickWithJS(searchPages.inturnLink);
    }

    @Then("cliks request a demo button INTURN website")
    public void cliks_request_a_demo_button_INTURN_website() {
        clickWithJS(searchPages.clickRequestADemo);
    }

    String demoPageVerbiage = "Please fill out the information below.";

    @Then("user should be able to see Request a Demo Page")
    public void user_should_be_able_to_see_Request_a_Demo_Page() {
        String headerOfDemo = searchPages.getDemoVebiage();

        Assert.assertEquals(demoPageVerbiage, headerOfDemo);
    }

}
