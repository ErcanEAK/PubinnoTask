package Pages;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;



public class BasePage {

    @FindBy(id = "number")
    public WebElement numberArea;

    @FindBy (id = "getFactorial")
    public WebElement calculateButton;

    @FindBy (id = "resultDiv")
    public WebElement result;



    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }
}