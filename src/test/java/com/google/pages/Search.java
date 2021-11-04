package com.google.pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.google.utilities.Driver;

public class Search {
    public Search() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(name = "q")
    public WebElement searchTextBox;

    @FindBy(xpath = "//h3[@class='LC20lb DKV0Md'][contains(.,'INTURN: Excess Inventory Optimization Solutions [Manage ...')]")
    public WebElement inturnLink;

    @FindBy(xpath = "//span[@class='button__value'][contains(.,'Request a demo')]")
    public WebElement clickRequestADemo;

    @FindBy(xpath = "//p[contains(@class,'h3 demo-page__form-title')]")
    public WebElement demoRequest;

    public void enterText() {
        searchTextBox.sendKeys("inturn");
    }

    public void pressEnter() {
        searchTextBox.sendKeys(Keys.ENTER);
    }

    public String getDemoVebiage(){
       return demoRequest.getText();
    }
}
