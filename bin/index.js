#!/usr/bin/env node
/* eslint-disable no-console */
const chalk = require('chalk');
const prompt = require('prompt-sync');
const { cabin200, terminalWoodsColossal } = require('./lib/utils/ascii');
require('dotenv').config();

async function loadPrompts() {
  console.log(chalk.bold.green('Welcome to the game!'));
  console.log(terminalWoodsColossal);
  console.log('You find yourself in a lonely cabin in a lonely wood');
  console.log(cabin200);
  const name = prompt(chalk.blue('What is your name?'));
  console.log(chalk.purple(`Hello, ${name}. Are you ready to begin?`));
}
loadPrompts();
