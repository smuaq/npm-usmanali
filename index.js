#!/usr/bin/env node

const {
  white,
  blueBright
} = require("colorette");

const work = white(`Engineering Manager & Developer`)
const twitter = blueBright('https://twitter.com/smuaq')
const linkedIn = blueBright('https://www.linkedin.com/in/usman-qadri')
const github = blueBright('https://github.com/smuaq')
const website = blueBright('https://smuaq.github.io')
const npx = white('npx usmanali')

const heading = `${white('Usman Ali')}`
const rows = {
  LinkedIn: linkedIn,
  Website: website,
  Twitter: twitter,
  Github: github,
  Card: npx
}

let output = `
${heading}
${work}
`;

// `maxKeyLetters` helps in formatting the information nicely
const maxKeyLetters = Math.max(...Object.keys(rows).map(key => key.length));
const secondaryContent = Object.keys(rows).map((key) => {
  return `${key.padEnd(maxKeyLetters)} : ${rows[key]}`
}).join('\n');

output += `${secondaryContent}`;

console.log(output);
