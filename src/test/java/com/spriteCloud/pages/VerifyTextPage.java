package com.spriteCloud.pages;

import com.spriteCloud.utilities.BrowserUtils;
import com.spriteCloud.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class VerifyTextPage extends BasePage {

    public boolean allText(String word) {
        List<WebElement> elements = Driver.get().findElements(By.xpath("//*[contains(text(),'" + word + "')]"));
        for (WebElement each : elements) {
            if (each.isDisplayed()) {
                return true;
            }
        }
        return false;
    }
    public List<String> getText(String word){
        List<WebElement> elements = Driver.get().findElements(By.xpath("//*[contains(text(),'" + word + "')]"));
        return BrowserUtils.getElementsText(elements);
    }
}
