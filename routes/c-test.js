const express = require('express');
const rp = require('request-promise');
const cheerio = require('cheerio');
const router = express.Router();
const scrapper = require('./site-content');

router.get('/', async function(req, res, next) {
  res.send( await test());
});

router.get('/:url', async function(req, res, next) {
  const url = decodeURIComponent(req.params.url);
  const body = await scrapper.getSiteContent(url);
  res.send(body);
});

const test = async () => {
  const ret = await rp('https://jsonplaceholder.typicode.com');
  const $ = cheerio.load(ret);
  const results = $('p').text();
  console.log(results);
  return results;
};

const test1 = async (site) => {
  const ret = await rp(`${site.id}${site.path}`);
  const $ = cheerio.load(ret);
  const results = $('p').text();
  console.log(results);
  return results;
};

module.exports = router;
