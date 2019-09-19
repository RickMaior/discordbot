const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
var translate = require('yandex-translate')(settings.yandexKey);

module.exports.run = async (bot, message, args) => {
    let language = args.shift()
    console.log("language = " + language)
     let toTranslate = args.join(" ")

     translate.translate(toTranslate, { to: "pt" }, function(err, res) {
        console.log(res.text);
      });
   
};

module.exports.help = {
  name: "Translate",
  command: "translate",
  aliases: [],
  helpInfo: ["I will translate the message"]
};
