console.clear()
require("./utils/console");

try{
    global.config = require("./config.json");
}catch(e) {
    console.warn("Creating config.json");
    fs.writeFileSync("./config.json", "{}");
    process.exit();
};
const validator = require("./utils/validator")
const Gamedig = require('gamedig');
const chalk = require("chalk");
const fs = require("fs");
const { Client } = require('discord.js');
const client = new Client();

/* 

    LOGO

*/

console.raw(chalk.cyan(fs.readFileSync("./logo.md", "utf-8")));

validator(config);

global.clients = {};


client.on('ready', () => {
    console.log(`Client ${client.user.tag} Logged!`)
    setInterval(() => {
        Gamedig.query({
            type: 'minecraft',
            host: config['BOTS']['servers'][0]['IP']
        }).then((state) => {
            const serverOnline = state.players.length;
            if (serverOnline < 1) client.user.setActivity("Server is empty").then(console.log("Server is empty"))
            else client.user.setActivity(serverOnline + "/" + state.maxplayers).then(console.log(serverOnline + "/" + state.maxplayers));
        }).catch((error) => {
            client.user.setActivity("Server is Offline").then(console.log("Server is offline"));
        });
    }, 5000);
});

client.login(config['BOTS']['servers'][0]['TOKEN'])