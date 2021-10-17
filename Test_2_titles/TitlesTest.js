const {Builder,By,Key} = require("selenium-webdriver");

async function title_test(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('http://automationpractice.com/index.php');

        let title = await driver.getTitle();

        if (title === 'My Store') console.log('\n Passed \n');
        else console.log('\n Failed \n');
    }
    catch(e){
        if (e.name === 'NoSuchElementError') console.log('Element not found \n Failed');
    }
    finally{
        await driver.quit();
    }
}

title_test();