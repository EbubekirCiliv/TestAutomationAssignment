package com.spriteCloud.pages;


import com.spriteCloud.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import java.util.List;

public class ClickPage extends BasePage {
    @FindBy(xpath = "//h4")
    public List<WebElement> headlines;

    @FindBy(id = "badButton")
    public WebElement blueButton;

    @FindBy(xpath = "//button[@class='btn btn-success']")
    public WebElement greenButton;

    public void clickButton(){
      Actions action = new Actions(Driver.get());
      action.moveToElement(blueButton).click().perform();
    }



}
