#!/usr/bin/env ts-node
import figlet from 'figlet';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import { Calculator } from './Calculator';

console.log(figlet.textSync('Musfira Calculator'));

const calculator = new Calculator();

const startFunction = async (): Promise<void> => {
    const rainbow = chalkAnimation.rainbow("Let's start Calculating");
    setTimeout(() => {
        rainbow.stop();
    }, 2000);

    console.log(` _____________________
        |  _________________  |
        | | MUSFIRA      0. | |
        | |_________________| |
        |  ___ ___ ___   ___  |
        | | 7 | 8 | 9 | | + | |
        | |___|___|___| |___| |
        | | 4 | 5 | 6 | | - | |
        | |___|___|___| |___| |
        | | 1 | 2 | 3 | | x | |
        | |___|___|___| |___| |
        | | . | 0 | = | | / | |
        | |___|___|___| |___| |
        |_____________________|`);

    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation do you want to perform?\n",
            choices: ["Add", "Subtract", "Multiply", "Divide"],
        },
        {
            type: "number",
            name: "num1",
            message: "Enter the first Number = ",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter the second Number = ",
        },
    ]);

    const num1: number = answers.num1;
    const num2: number = answers.num2;

    let result: number;

    switch (answers.operator) {
        case "Add":
            result = calculator.add(num1, num2);
            console.log(chalk.green(`${num1} + ${num2} = ${result}`));
            break;
        case "Subtract":
            result = calculator.subtract(num1, num2);
            console.log(chalk.red(`${num1} - ${num2} = ${result}`));
            break;
        case "Multiply":
            result = calculator.multiply(num1, num2);
            console.log(chalk.yellow(`${num1} * ${num2} = ${result}`));
            break;
        case "Divide":
            result = calculator.divide(num1, num2);
            console.log(chalk.bgGreenBright(`${num1} / ${num2} = ${result}`));
            break;
        default:
            console.log("ERROR");
    }
};

const main = async (): Promise<void> => {
    let restart: { restart: string };
    do {
        await startFunction();
        restart = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to restart? Yes or No",
        });
    } while (restart.restart.toLowerCase() === "yes" || restart.restart.toLowerCase() === "y");
};

main();
