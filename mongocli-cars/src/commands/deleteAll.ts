import chalk from "chalk";
import { Car } from "../models/car";

const log = console.log;

export const deleteAllCmd = async () => {
    log(chalk.yellowBright('Deleting all cars data...'));

    try {
        const deleteResult = await Car.deleteMany({});

        if (deleteResult.deletedCount > 0) {
            log(chalk.green(`Successfully deleted ${deleteResult.deletedCount} cars!`));
        } else {
            log(chalk.yellow('No cars data found to delete.'));
        }
    } catch (error) {
        log(chalk.red('Error occurred while deleting cars data:'));
    }
};
