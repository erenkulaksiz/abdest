import path from "path";
import chalk from "chalk";
import { default as player } from "play-sound";

const __dirname = path.resolve();

function main() {
  const soundsDir = path.resolve(__dirname, "../assets");
  player().play(path.join(soundsDir, "sound.m4a"));
  console.log(chalk.inverse("Abdestlendin!"));
}

main();
