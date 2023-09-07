import chalk from "chalk";
import { Car } from "../models/car";

const log = console.log;

export const carsCmd = async (onlyShowCount: boolean) => {
    log(chalk.yellowBright('Current cars in stock'));
    const cars = await Car.find({});
    log(chalk.green(`Found ${cars.length} cars in stock`));
    if(!onlyShowCount) {
        log(chalk.blue(cars));
    }
};