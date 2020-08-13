const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const CourtData = require('../../database/CourtData.js');
const SessionData = require('../../database/SessionData.js');

require('chromedriver');

async function getSessionsForDate(dateString) {
  console.log(`Get sessions for ${dateString}`);
  let courtDivList = await _getAndWaitForCourtsList(dateString);
  let allSessions = [];
  console.log('Parsing court list for sessions');
  await _asyncForEach(courtDivList, async (courtDiv) => {
    let courtSessions = await _parseCourtAndSessionsFromDiv(
      courtDiv,
      dateString
    );
    allSessions = allSessions.concat(courtSessions);
  });
  return allSessions;
}

async function updateCourtsForDate(dateString) {
  console.log(`Get courts for ${dateString}`);
  let courtDivList = await _getAndWaitForCourtsList(dateString);
  let allCourts = [];
  console.log('Parsing court list for courts');
  await _asyncForEach(courtDivList, async (courtDiv) => {
    let court = await _parseCourtsFromDiv(courtDiv);
    allCourts = allCourts.concat(court);
  });
  return allCourts;
}

async function _parseCourtsFromDiv(courtDiv) {
  let courtLink = await courtDiv.findElement(
    By.xpath('.//a[contains(@href,"spot")]')
  );
  let courtId = (await courtLink.getAttribute('href')).split('/').pop();
  let courtName = await courtLink
    .findElement(By.xpath('./span'))
    .getAttribute('textContent');
  let courtLocation = await courtDiv
    .findElements(By.xpath('.//descendant::span[2]'))
    .getAttribute('textContent');
  console.log(`Court object parsed: ${courtId} ${courtName} ${courtLocation}`);
  let court = CourtData.init(courtId, courtName, courtLocation);
  return court;
}

async function _parseCourtAndSessionsFromDiv(courtDiv, dateString) {
  let court = await _parseCourtsFromDiv(courtDiv);
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

async function _getAndWaitForCourtsList(dateString) {
  let driver = _buildDriver();
  let url = _getSearchPageUrl(dateString);
  console.log(`Waiting for url: ${url}`);
  await driver.get(url);
  console.log(await driver.getPageSource());
  console.log('wait 2 seconds.');
  wait(4020);
  let captchaButton = await driver.findElement(By.className('btn-primary'));
  console.log(await captchaButton.getAttribute('innerHTML'));
  await captchaButton.click();
  console.log('clicked');
  console.log('wait 2 seconds.');
  wait(2000);
  console.log('new page?');
  console.log(await driver.getPageSource());
  await _waitCourtForLength(driver, 24);
  console.log('Web response completed');
  let courtDivList = await _getCourtDivList(driver);
  return courtDivList;
}

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
 }
}

function _waitCourtForLength(driver, length) {
  return driver.wait(async () => {
    const found = await _getCourtDivList(driver);
    console.log(found.getAttribute('outerHTML'));
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
exports.updateCourtsForDate = updateCourtsForDate;
