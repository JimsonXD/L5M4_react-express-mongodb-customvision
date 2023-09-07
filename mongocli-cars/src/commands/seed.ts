import chalk from "chalk";
import { Car } from "../models/car";
// import { CARS } from "../utils/mockDataGenerator";
import { cars } from "../utils/carsData";

const log = console.log;

export const seedCmd = async () => {
    log(chalk.yellowBright('Seeding random cars...'));
    // const cars = CARS
    log(chalk.blue(JSON.stringify(cars, null, 2)));
    Car.insertMany(cars);
    log(chalk.green(`Successfully uploaded ${cars.length} cars!`));
};