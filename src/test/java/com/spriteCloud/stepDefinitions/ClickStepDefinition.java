package com.spriteCloud.stepDefinitions;

import com.spriteCloud.pages.ClickPage;
import com.spriteCloud.utilities.BrowserUtils;
import com.spriteCloud.utilities.ConfigurationReader;
import com.spriteCloud.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

import java.util.List;

public class ClickStepDefinition {
    ClickPage clickPage = new ClickPage();

    @Given("the user is on the page")
    public void the_user_is_on_the_page() {
        Driver.get().get(ConfigurationReader.get("url_UI"));
    }

    @When("the user clicks on the {string} headline")
    public void the_user_clicks_on_the_headline(String headline) {
        clickPage.clickHeadline(headline);

    }

    @Then("the window title contains {string}")
    public void the_window_title_contains(String title) {
        BrowserUtils.waitForPageToLoad(20);
        Assert.assertTrue("The title is not same", Driver.get().getTitle().contains(title));
    }

    @Then("the user should see the following headlines")
    public void the_user_should_see_the_following_headlines(List<String> headlines) {
        BrowserUtils.waitForPageToLoad(20);
        Assert.assertEquals("The headlines are not contained", headlines, BrowserUtils.getElementsText(clickPage.headlines));
    }

    @Then("the button is displayed")
    public void the_button_is_displayed() {
        BrowserUtils.waitForPageToLoad(20);
        Assert.assertTrue("The button is not displayed", clickPage.blueButton.isDisplayed());
    }

    @When("the user clicks on the button")
    public void the_user_clicks_on_the_button() {
        BrowserUtils.waitForClickablility(clickPage.blueButton, 20);
        clickPage.clickButton();

    }

    @Then("the user should see the green button")
    public void the_user_should_see_the_button() {
        BrowserUtils.waitForPageToLoad(20);
        Assert.assertTrue("The green button is not displayed", clickPage.greenButton.isDisplayed());

    }


}
