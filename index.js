// comandos para por bot em heroku
// 1º-     heroku login
// 2º-     git init
// 3º-     heroku git:remote <app name inheroku>
// 4º-     git add .
// 5º-     git commit -am "nome"
// 6º-     git push heroku master
// 7º-     no heroku verificar se tem node.js em buildpacks
// 8º


//  atualizaçao
// git add .
// git commit -m "lembrete de alteracao"
// git push heroku master



//Atualizaçao
// git push 

//  bot off (worker=0)   //  on (worker=1)
// heroku scale worker=0


//  Get bot started auto
//  Start: pm2 start <file>
// Restart: pm2 restart <file>
// Stop: pm2 stop <file>
// Start with chech on file change: pm2 start <file> --watch
// logs: pm2 logs <file> //*/

//const botlink = 'https://discordapp.com/oauth2/authorize?client_id=585515672826675200&scope=bot&permissions=2146958847';

var emoji = require("node-emoji");
const emojiCharacters = require("./emojiCharacters");
const Discordlink = "https://discord.gg/zarb57n";
const created = "‎terça-feira, ‎4‎ de ‎junho‎ de ‎2019, ‏‎18:24:49";
//const activity = "Ping me";


require('dotenv').config()

const Discord = require("discord.js");
const { Client, Attachment } = require("discord.js");
const settings = require("./bot/settings.json");

const fs = require("fs");
const token = settings.token;

const bot = new Client();


bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();


//Command Handler
fs.readdir("./commands/", (err, files) => {
  if (err) {
    console.error("An error has occured while loading commands: ");
    console.error(err);
  }

  let jsFile = files.filter(file => file.split(".").pop() == "js");
  if (jsFile.length < 0) {
    console.error("Couldn't load commands.");
    return;
  }

  jsFile.forEach((file, i) => {
    let props = require(`./commands/${file}`);
    console.log(`${props.help.name} command has been loaded.`);
    bot.commands.set(props.help.command, props);

    props.help.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.command);
    });
  });
});

//Event Handler
fs.readdir("./events/", (err, files) => {
  if (err) {
    console.error("An error has occured while loading events: ");
    console.error(err);
  }

  let jsFile = files.filter(file => file.split(".").pop() == "js");
  if (jsFile.length < 0) {
    console.error("Couldn't load events.");
    return;
  }

  jsFile.forEach((file, i) => {
    let props = require(`./events/${file}`);

    console.log(`${props.help.name} event has been loaded.`);
    bot.events.set(props.help.event, props);

    bot.on(props.help.event, props.bind(null, bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

bot.login(token);
