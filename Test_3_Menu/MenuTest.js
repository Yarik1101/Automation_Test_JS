const {Builder,By,Key} = require("selenium-webdriver");

async function Menu_Test() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://automationpractice.com/index.php');

    let FirstItem = await driver.findElement(By.xpath('//li/a[@title="Women"]')).getText();
    let SecondItem = await driver.findElement(By.xpath('//div[@id="block_top_menu"]/ul/li/a[@title="Dresses"]')).getText();
    let ThirdItem = await driver.findElement(By.xpath('//div[@id="block_top_menu"]/ul/li/a[@title="T-shirts"]')).getText();

    /* Проблема xPath в том, что по запросу //li/a[@title="Dresses"] и //li/a[@title="T-shirts"]
    выдавались и подменю категории Women, поэтому пришлось детально расписать запрос*/

    if(FirstItem === 'WOMEN' && SecondItem === 'DRESSES' && ThirdItem === 'T-SHIRTS'){
        console.log('\n Passed \n');
    }else console.log('\n Failed \n');

    driver.quit();
}

Menu_Test();