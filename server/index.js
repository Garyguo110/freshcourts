const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the React app. 
app.use(express.static(path.join(__dirname, '..', 'client/build')));

// Connect to the Database
const { Pool } = require('pg');
const dbUrl = process.env.DATABASE_URL || "postgres://localhost:5432/postgres";

const pool = new Pool({
    connectionString: dbUrl,
});

app.get('/api', async (req, res) => {
    const {Builder, By, until} = require('selenium-webdriver');
    require('chromedriver');
    const chrome = require('selenium-webdriver/chrome');

    let options = new chrome.Options();
    options.setChromeBinaryPath(process.env.CHROME_BINARY_PATH);
    let serviceBuilder = new chrome.ServiceBuilder(process.env.CHROME_DRIVER_PATH);

    //Don't forget to add these for heroku
    options.addArguments("--headless");
    options.addArguments("--disable-gpu");
    options.addArguments("--no-sandbox");

    let driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .setChromeService(serviceBuilder)
        .build();

    await driver.get('https://spotery.com/search?psLangId=EN&psAddrCity=San%20Francisco&psSourceFlow=SPOT&psIsGridView=false');
    let table = await driver.wait(until.elementLocated(By.id('pt1:pgl17')),5000);
    res.send(await table.getAttribute('outerHTML'));
});

app.get('/db', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM test_table');
        const results = { 'results': (result) ? result.rows : null};
        res.send(results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`listening to port ${port} now...`);
});