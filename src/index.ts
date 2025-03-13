#!/usr/bin/env node

import path from "path";
import chalk from "chalk";
import { default as player } from "play-sound";

const __dirname = path.resolve();

function main() {
  player().play(path.join(__dirname, "sound.m4a"));
  console.log(path.join(__dirname, "sound.m4a"));
  console.log(chalk.inverse("Abdestlendin!"));
}

main();
