 // lib/ytmp3.js
const puppeteer = require('puppeteer');

async function getYtmp3Link(videoUrl) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  try {
    await page.goto('https://ytmp3.ch/en22/', { waitUntil: 'domcontentloaded' });
    await page.type('#url', videoUrl);
    await page.click('#submit');
    await page.waitForSelector('.download-button > a', { timeout: 60000 });
    const mp3Url = await page.$eval('.download-button > a', el => el.href);
    await browser.close();
    return mp3Url;
  } catch (err) {
    console.error('[ytmp3 lib] Error:', err.message);
    await browser.close();
    return null;
  }
}

module.exports = { getYtmp3Link };
