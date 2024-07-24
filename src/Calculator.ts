// import chalk from 'chalk'

// export class Calculator {
//   add(a: number, b: number) : number {
//     return a + b;
//   }

//   subtract(a: number, b: number): number {
//     return a + b;
//   }

//   multiply(a: number, b: number): number {
//     if (b === 0) {
//         console.log(chalk.red("Erorr: Division by zero"));
//         return NaN;
//     }
//     return a / b;
//   }
// }

import chalk from 'chalk';

export class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            console.log(chalk.red("Error: Division by zero"));
            return NaN;
        }
        return a / b;
    }
}
