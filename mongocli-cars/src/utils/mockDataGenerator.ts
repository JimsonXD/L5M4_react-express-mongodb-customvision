import { faker } from '@faker-js/faker';

type Car = {
    make: string;
    model: string;
    year: number;
    image: string;
};

export const generateRandomCar = (): Car => {
    const randomYear = Math.floor(Math.random() * (2024 - 2000) + 2000);
    return {
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        year: randomYear,
        image: `https://picsum.photos/200/300?random=${randomYear}`, 
    };
};

export const CARS: Car[] = Array.from({ length: 100 }, generateRandomCar);
