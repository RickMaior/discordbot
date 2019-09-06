const settings = require("../bot/settings.json");

const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    let time = new Date;
    console.table(time);

    message.channel.send("day of the week: " + time.getDay())

    if (time.getDay() === 0 || time.getDay() === 6) {
        message.channel.send("Today is weekend, no worries 😃")
    } else {
        message.channel.send("Today is day of work")
    }


};

module.exports.help = {
    name: "Time",
    command: "time",
    aliases: [NaN],
    helpInfo: ["Check current time on UTC"]
};
