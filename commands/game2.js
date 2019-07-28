const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const emojiCharacters = require("../emojiCharacters");

module.exports.run = async (bot, message, args) => {
  var board = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]];

  var player1 = message.author.id;
  var winner;

  if (
    bot.game //&& user.id !== message.author.id
  ) {
    message.reply("There is already a game on, try again later");
    return;
  } else {
    //bot.game = true;

    function win(board) {
      let winner;

      for (let i = 0; i < board.length; i++) {
        if (board[i][1] === board[i][0] && board[i][1] === board[i][2]) {
          winner = board[i][1];
          //message.reply("The winner is(linha) " + winner);
        }
        if (board[1][i] === board[0][i] && board[1][i] === board[2][i]) {
          winner = board[1][i];
          //message.reply("The winner is(coluna) " + winner);
        }
      }
      if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        winner = board[1][1];
        //message.reply("The winner is(diagonal descer) " + winner);
      }
      if (board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
        winner = board[1][1];
        //message.reply("The winner is(diagonal subir) " + winner);
      }

      if (winner) bot.game = false;
      return winner;
    }

    let game = await message.channel.send("Click on the emote to join");
    await game.react("🚪");

    const filterEmoji = (reaction, user) => {
      return ["🚪"].includes(reaction.emoji.name);
    };

    const join = await game
      .awaitReactions(filterEmoji, {
        // funcçao que permite  verificar qual emote foi escolhido
        max: 2,
        time: 60000,
        errors: ["time"]
      })
      .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 1 reacted.`);

        game.edit(`TIME OUT ⏰\nNobody joined the game`);
        bot.game = false;
      });

    const reaction = join.last();
    //message.channel.send("The user join the game: " + reaction.users.last());
    const player2 = reaction.users.last().id;

    //const data = await promiseFunction().catch(err => console.log(err))

    //Inicio do jogo

    if (player1 && player2) {
      await message.channel.send(
        "O player 1 =  <@" + player1 + "> e o player 2 é = <@" + player2 + ">"
      );
    }

    await game.edit(
      `This is the board: \n${emojiCharacters[board[0][0]]} | ${
        emojiCharacters[board[0][1]]
      } | ${emojiCharacters[board[0][2]]}\n${emojiCharacters[board[1][0]]} | ${
        emojiCharacters[board[1][1]]
      } | ${emojiCharacters[board[1][2]]}\n${emojiCharacters[board[2][0]]} | ${
        emojiCharacters[board[2][1]]
      } | ${emojiCharacters[board[2][2]]}`
    );

    let checkDraw = 0;

    while (1 === 1 /*bot.game === true*/) {
      const filterMessage = m =>
        m.author.id === player1 &&
        m.content.length === 1 &&
        [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I"
        ].includes(m.content);

      let pick = await message.channel
        .awaitMessages(filterMessage, {
          max: 1,
          time: 60000,
          errors: ["time"]
        })
        .catch(collected => message.channel.send("Time out"));

      let move = pick.first().content.toLowerCase();
      console.log("move= " + move);

      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === move) {
            console.log(`O lugar [${i}] [${j}] esta ocupado`);
            board[i][j] = "x";
          }
        }
      }

      await game.edit(
        `**Player 2 turn** \n${emojiCharacters[board[0][0]]} | ${
          emojiCharacters[board[0][1]]
        } | ${emojiCharacters[board[0][2]]}\n${
          emojiCharacters[board[1][0]]
        } | ${emojiCharacters[board[1][1]]} | ${
          emojiCharacters[board[1][2]]
        }\n${emojiCharacters[board[2][0]]} | ${
          emojiCharacters[board[2][1]]
        } | ${emojiCharacters[board[2][2]]}`
      );

      winner = win(board);
      if (winner) {
        game.edit(
          `The winner is <@${player1}>\n<@${player2}> have a better luck next time\n${emojiCharacters[board[0][0]]} | ${
            emojiCharacters[board[0][1]]
          } | ${emojiCharacters[board[0][2]]}\n${
            emojiCharacters[board[1][0]]
          } | ${emojiCharacters[board[1][1]]} | ${
            emojiCharacters[board[1][2]]
          }\n${emojiCharacters[board[2][0]]} | ${
            emojiCharacters[board[2][1]]
          } | ${emojiCharacters[board[2][2]]}`
        );
        return;
      }

      checkDraw = checkDraw +1;

      if(checkDraw === 5)
      {game.edit(`The game endend in a draw\n${emojiCharacters[board[0][0]]} | ${
        emojiCharacters[board[0][1]]
      } | ${emojiCharacters[board[0][2]]}\n${
        emojiCharacters[board[1][0]]
      } | ${emojiCharacters[board[1][1]]} | ${
        emojiCharacters[board[1][2]]
      }\n${emojiCharacters[board[2][0]]} | ${
        emojiCharacters[board[2][1]]
      } | ${emojiCharacters[board[2][2]]}`
    );
    return;}

      const filterMessageP2 = m =>
        m.author.id === player2 &&
        m.content.length === 1 &&
        [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I"
        ].includes(m.content);

      let pick2 = await message.channel
        .awaitMessages(filterMessageP2, {
          max: 1,
          time: 60000,
          errors: ["time"]
        })
        .catch(collected => message.channel.send("Time out"));
      let move2 = pick2.first().content.toLowerCase();
      console.log("move= " + move);

      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === move2) {
            console.log(`O lugar [${i}] [${j}] esta ocupado`);
            board[i][j] = "o";
          }
        }
      }

      await game.edit(
        `**Player 1 turn** \n${emojiCharacters[board[0][0]]} | ${
          emojiCharacters[board[0][1]]
        } | ${emojiCharacters[board[0][2]]}\n${
          emojiCharacters[board[1][0]]
        } | ${emojiCharacters[board[1][1]]} | ${
          emojiCharacters[board[1][2]]
        }\n${emojiCharacters[board[2][0]]} | ${
          emojiCharacters[board[2][1]]
        } | ${emojiCharacters[board[2][2]]}`
      );

      winner = win(board);
      if (winner) {
        game.edit(
          `**The winner is <@${player2}>**\n<@${player1}> have a better luck next time\n${emojiCharacters[board[0][0]]} | ${
            emojiCharacters[board[0][1]]
          } | ${emojiCharacters[board[0][2]]}\n${
            emojiCharacters[board[1][0]]
          } | ${emojiCharacters[board[1][1]]} | ${
            emojiCharacters[board[1][2]]
          }\n${emojiCharacters[board[2][0]]} | ${
            emojiCharacters[board[2][1]]
          } | ${emojiCharacters[board[2][2]]}`
        );
        return;
      }
    }

    // https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=createMessageCollector
    // https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=awaitMessages

    bot.game = false;
  }
};

module.exports.help = {
  name: "Game2",
  command: "game2",
  aliases: ["tictactoe"],
  helpInfo: ["Tic tac toe game, make a row to win"]
};
