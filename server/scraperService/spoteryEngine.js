const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const CourtData = require('../../database/CourtData.js');
const SessionData = require('../../database/SessionData.js');

require('chromedriver');

async function getSessionsForDate(dateString) {
  let driver = _buildDriver();
  await driver.get(_getSearchPageUrl(dateString));
  await _waitCourtForLength(driver, 24);
  let courtDivList = await _getCourtDivList(driver);
  let allSessions = [];
  await _asyncForEach(courtDivList, async (courtDiv) => {
    let courtSessions = await _parseCourtAndSessionsFromDiv(
      courtDiv,
      dateString
    );
    allSessions = allSessions.concat(courtSessions);
  });
  return allSessions;
}

async function _parseCourtAndSessionsFromDiv(courtDiv, dateString) {
  let courtLink = await courtDiv.findElement(
    By.xpath('.//a[contains(@href,"spot")]')
  );
  let courtId = (await courtLink.getAttribute('href')).split('/').pop();
  let courtName = await courtLink
    .findElement(By.xpath('./span'))
    .getAttribute('textContent');
  let court = CourtData.init(courtId, courtName, '', '');
  return _parseSessionDivList(court, courtDiv, dateString);
}

async function _parseSessionDivList(court, courtDiv, dateString) {
  let courtSessions = [];
  try {
    let sessionDivList = await courtDiv.findElements(
      By.xpath('.//descendant::span[6]/div')
    );
    await _asyncForEach(sessionDivList, async (sessionDiv) => {
      let session = await _parseSessionsFromDiv(court, sessionDiv, dateString);
      courtSessions.push(session);
    });
  } catch (e) {
    if (e.name === 'NoSuchElementError') console.log('Element not found');
    else throw e;
  }
  return courtSessions;
}

async function _parseSessionsFromDiv(court, sessionDiv, dateString) {
  let timeSlot = await sessionDiv
    .findElement(By.xpath('.//descendant::span[1]'))
    .getAttribute('textContent');
  let isAvailable =
    (await sessionDiv.findElements(By.className('p_AFDisabled'))).length === 0;
  return SessionData.init(court, dateString, timeSlot, isAvailable);
}

function _waitCourtForLength(driver, length) {
  return driver.wait(async () => {
    const found = await _getCourtDivList(driver);
    return found.length === length;
  }, 20000);
}

async function _getCourtDivList(driver) {
  const reservationTableId = 'pt1:pgl6';
  return driver
    .wait(until.elementLocated(By.id(reservationTableId)), 10000)
    .findElements(By.xpath('./div'));
}

function _getSearchPageUrl(dateString) {
  return `https://spotery.com/search?psLangId=EN&psAddrCity=San%20Francisco
  &psReservationDateStr=${dateString}&psSourceFlow=SPOT&psIsGridView=false`;
}

function _buildDriver() {
  let options = new chrome.Options();
  options.setChromeBinaryPath(process.env.CHROME_BINARY_PATH);
  let serviceBuilder = new chrome.ServiceBuilder(
    process.env.CHROME_DRIVER_PATH
  );

  // Don't forget to add these for heroku
  options.addArguments('--headless');
  options.addArguments('--disable-gpu');
  options.addArguments('--no-sandbox');

  return new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .setChromeService(serviceBuilder)
    .build();
}

async function _asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

exports.getSessionsForDate = getSessionsForDate;
