#!/usr/bin/env node
import path from "path";
import chalk from "chalk";
import { default as player } from "play-sound";
import { fileURLToPath } from "url";
// Get the directory where the package is installed
const packageRoot = path.dirname(fileURLToPath(import.meta.url));
function main() {
    const soundPath = path.resolve(packageRoot, "..", "sound.m4a");
    player().play(soundPath);
    console.log(soundPath);
    console.log(chalk.inverse("Abdestlendin!"));
}
main();
