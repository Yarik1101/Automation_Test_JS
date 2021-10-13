const {Builder,By,Key} = require("selenium-webdriver");

async function title_test(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://automationpractice.com/index.php');

    let title = await driver.getTitle();

    if (title === 'My Store') console.log('\n Passed \n');
    else console.log('\n Failed \n');

    await driver.quit();
}

title_test();