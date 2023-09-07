#!/usr/bin/env node

import figlet from "figlet";
import { program } from "commander";
import { carsCmd } from "./commands/cars";
import { initDB } from "./db";
import { seedCmd } from "./commands/seed";
import { deleteAllCmd } from "./commands/deleteAll"

console.log(figlet.textSync("MongoDB CLI"));

initDB();

program.version("1.0.0").description("A CLI tool to seed data into MongoDB");

program
  .command("cars")
  .description("Shows collection of all cars in MongoDB")
  .option(
    "-c, --count",
    "Only get the count. If not specified it will show all data."
  )
  .action((options) => carsCmd(options.count));

program
  .command("seed")
  .description("Uploads random cars onto MongoDB")
  .action(seedCmd);

program
  .command("delete-all")
  .description("Deletes all cars data in MongoDB")
  .action(deleteAllCmd);

program.parse(process.argv);
