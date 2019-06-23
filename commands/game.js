const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const emojiCharacters = require("../emojiCharacters");
let lock = false;

module.exports.run = async (bot, message, args) => {
  var total = 0;

  let botNumber;
  let pMove;

  function botMove(total) {
    let b;

    b = 4 - ((total + 1) % 4);
    if (b === 4 || total < 4) {
      b = Math.floor(Math.random() * 3 + 1);
    }
    return b;
  }

  const react = message => {
    message
      .clearReactions()
      .then(() => message.react(emojiCharacters[1])) // vai reagir com emoji de 1 a 3
      .then(() => message.react(emojiCharacters[2]))
      .then(() => message.react(emojiCharacters[3]));
  }; // reaçao do emoji de 1 a 3

  const filter3 = (reaction, user) => {
    return (
      [emojiCharacters[1], emojiCharacters[2], emojiCharacters[3]].includes(
        reaction.emoji.name
      ) && user.id === message.author.id
    );
  }; // so reage se apenas for usados emojis certos e a pessoa que enviou a primeira mensagem

  // INICIO DO PROGRAMA

  if (lock) {
    message.reply("There is already a game on, try again later");
    return;
  } else {
    const gameMsg = await message.reply(
      "Game has started\nPls choose your number"
    );
    lock = true;
    while (total < 31) {
      react(gameMsg);

      await gameMsg
        .awaitReactions(filter3, {
          // funcçao que permite  verificar qual emote foi escolhido
          max: 1,
          time: 60000,
          errors: ["time"]
        })
        .then(collected => {
          const reaction = collected.first();

          switch (reaction.emoji.name) {
            case emojiCharacters[1]:
              pMove = 1;
              break;
            case emojiCharacters[2]:
              pMove = 2;
              break;
            case emojiCharacters[3]:
              pMove = 3;
              break;
          }
        })
        .catch(collected => {
          console.log(
            `After a minute, only ${collected.size} out of 1 reacted.`
          );
          gameMsg.clearReactions();
          gameMsg.edit(
            `TIME OUT ⏰\nYou didnt picked a number, you just lost\nTry again later\n**The bot is the winner** \nIf you dont know how to play the game, do ${settings.prefix}help game`
          );
          lock = false;
          total = 50;
          
        });

      console.log("pMove =" + pMove);
      total = total + pMove;

      if (total > 30 && total < 40) {
        // caso o player ganhe
        gameMsg.edit(`The total is ${total}\n**The player is the winner**`);
        gameMsg.clearReactions();
        lock = false;
        console.log("Player win");
        break;
      }

      if (total < 40) {
        botNumber = await botMove(total);
        total = (await total) + botNumber;
      }

      if (total > 30 && total < 40) {
        // case o bot ganhe
        gameMsg.edit(
          `The total is ${total}\n**The bot is the winner**\nIf you dont know how to play the game, do ${
            settings.prefix
          }help game`
        );
        console.log("Bot win");
        gameMsg.clearReactions();
        lock = false;
        break;
      }

      if (total < 40) {
        await gameMsg.edit(
          `The total is ${total}\nPlayer picked ${pMove}\nBot picked ${botNumber}`
        );
      }
    }
    message.channel.send("END OF THE GAME");
  }
};

module.exports.help = {
  name: "Game",
  command: "game",
  aliases: [],
  helpInfo: ["The rules are simple, the 1º getting to 31 or highter wins, each player can pick 1,2 or 3"]
};