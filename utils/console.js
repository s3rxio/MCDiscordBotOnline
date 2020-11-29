const { log } = console;
const chalk = require("chalk");

console.log = function () {
    log.apply(console, [`[${chalk.bold.cyan("LOG")}]`,chalk.bold(...arguments)])
}

console.raw = function () {
    log.apply(console, arguments);
}

console.warn = function () {
    log.apply(console, [`[${chalk.bold.yellow("WARN")}]`,chalk.bold(...arguments)])
}

console.error = function () {
    log.apply(console, [`[${chalk.bold.red("ERROR")}]`,chalk.bold(...arguments)])
}