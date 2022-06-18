package com.spriteCloud.stepDefinitions;

import com.spriteCloud.pages.SampleAppPage;
import com.spriteCloud.utilities.BrowserUtils;
import io.cucumber.java.en.*;
import org.junit.Assert;

import java.util.Map;

public class SampleAppStepDefinition {
    SampleAppPage sampleAppPage = new SampleAppPage();

    @When("the user enters the following credentials")
    public void the_user_enters_the_following_credentials(Map<String,String > credentials) {

        sampleAppPage.inputUsername.sendKeys(credentials.get("username"));
        sampleAppPage.inputPassword.sendKeys(credentials.get("password"));

    }

    @When("the user clicks on the login button")
    public void the_user_clicks_on_the_login_button() {
        BrowserUtils.waitForClickablility(sampleAppPage.loginButton,20);
        sampleAppPage.loginButton.click();
    }

    @Then("the user should see {string} as a success notification")
    public void the_user_should_see_as_a_success_notification(String message) {
        BrowserUtils.waitForPageToLoad(20);
        Assert.assertTrue("The welcome message is not contained",sampleAppPage.loginStatus.getText().contains(message));



    }



}
