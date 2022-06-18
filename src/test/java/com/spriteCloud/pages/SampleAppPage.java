package com.spriteCloud.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SampleAppPage extends BasePage{

    @FindBy(xpath = "//input[@name='UserName']")
    public WebElement inputUsername;

    @FindBy(xpath = "//input[@name='Password']")
    public WebElement inputPassword;

    @FindBy(id = "login")
    public WebElement loginButton;

    @FindBy(id = "loginstatus")
    public WebElement loginStatus;


}
