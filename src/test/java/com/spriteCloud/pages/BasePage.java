package com.spriteCloud.pages;

import com.spriteCloud.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

public class BasePage {
    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    public void clickHeadline(String headline) {
        Driver.get().findElement(By.linkText(headline)).click();
    }


}
