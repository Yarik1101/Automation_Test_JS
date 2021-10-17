const {Builder, By, Key} = require('selenium-webdriver');

async function Negative_Login() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://automationpractice.com/index.php');
        await driver.findElement(By.xpath('//a[@class="login"]')).click();

        let login = await driver.findElement(By.xpath('//input[@id="email"]'))
        let password = await driver.findElement(By.xpath('//input[@id="passwd"]'))

        await login.sendKeys('emailemail@abcd.com');
        await password.sendKeys('TestTest111');

        await driver.findElement(By.xpath('//i[@class="icon-lock left"]')).click();

        let title = await driver.getTitle();

        if(title === 'Login - My Store') console.log('\n Passed');
        else console.log('\n Failed');

    }
    catch(e) {
        if (e.name === 'NoSuchElementError') console.log('Element not found \n Failed');
    }
}

Negative_Login();