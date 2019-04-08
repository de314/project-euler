const _ = require('lodash');
const axios = require('axios');
const cheerio = require('cheerio');
const jsonframe = require('jsonframe-cheerio');
const fs = require('fs');

const problemId = process.argv[2];

async function scrape(id) {
  const url = `https://projecteuler.net/problem=${id}`;
  const res = await axios(url);
  let $ = cheerio.load(res.data);
  jsonframe($);

  const title = $('h2').text();
  const description = $('.problem_content').text();
  const problem = {
    id,
    url,
    title,
    description,
  };
  const ctx = {
    paddedId: id.padStart(4, '0'),
    problem,
  };

  const runnerTemplate = _.template(
    fs.readFileSync('./src/problems/.template'),
  );
  const testTemplate = _.template(fs.readFileSync('./test/.template'));

  fs.writeFileSync(
    `./src/problems/${id.padStart(4, '0')}.js`,
    runnerTemplate(ctx),
  );
  fs.writeFileSync(`./test/${id.padStart(4, '0')}.spec.js`, testTemplate(ctx));
}

scrape(problemId);
