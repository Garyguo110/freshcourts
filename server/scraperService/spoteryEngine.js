const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');

async function getReservationsForDate(dateString) {
    let driver = _buildDriver();
    await driver.get(_getSearchPageUrl(dateString));
    let reservationTable = await _getReservationTable(driver);
    return reservationTable.getAttribute('outerHTML')
}

function _getReservationTable(driver) {
    const reservationTableId = 'pt1:pgl17';
    return driver.wait(until.elementLocated(By.id(reservationTableId)),10000);
}

function _getSearchPageUrl(dateString) {
    return `https://spotery.com/search?psLangId=EN&psAddrCity=San%20Francisco&psReservationDateStr=${dateString}&psSourceFlow=SPOT&psIsGridView=false`
}

function _buildDriver() {
    let options = new chrome.Options();
    options.setChromeBinaryPath(process.env.CHROME_BINARY_PATH);
    let serviceBuilder = new chrome.ServiceBuilder(process.env.CHROME_DRIVER_PATH);

    //Don't forget to add these for heroku
    options.addArguments("--headless");
    options.addArguments("--disable-gpu");
    options.addArguments("--no-sandbox");

    return new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .setChromeService(serviceBuilder)
        .build();
}

exports.getReservationsForDate = getReservationsForDate;