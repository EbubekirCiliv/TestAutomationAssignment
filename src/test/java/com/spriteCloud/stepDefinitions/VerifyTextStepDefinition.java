package com.spriteCloud.stepDefinitions;

import com.spriteCloud.pages.VerifyTextPage;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class VerifyTextStepDefinition {
    VerifyTextPage verifyTextPage = new VerifyTextPage();

    @Then("the user should see the all {string} text in the page")
    public void the_user_should_see_the_all_text_in_the_page(String word) {
        Assert.assertTrue("The words are not seen", verifyTextPage.allText(word));
        System.out.println(verifyTextPage.getText(word));
    }

}
