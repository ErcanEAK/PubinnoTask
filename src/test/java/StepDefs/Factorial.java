package StepDefs;

import Pages.BasePage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import utilities.BrowserUtils;
import utilities.ConfigurationReader;
import utilities.Driver;

public class Factorial {

    BasePage basePage = new BasePage();

    @Given("user is on the main page")
    public void user_is_on_the_main_page() {

    String url= ConfigurationReader.get("url");
        Driver.get().get(url);
        BrowserUtils.waitFor(3);

    }

    @When("user should write {string} on the number area")
    public void user_should_write_on_the_number_area(String num1) {
        basePage.numberArea.sendKeys(num1);
        BrowserUtils.waitFor(2);
    }

    @When("user should click  the Calculate button")
    public void user_should_click_the_Calculate_button() {
        basePage.calculateButton.click();
        BrowserUtils.waitFor(3);
    }

    @Then("user should see factoriel of {string}")
    public void user_should_see_factoriel_of(String result1) {
        String actualResult = basePage.result.getText();
        Assert.assertEquals(result1,actualResult);
    }

}
