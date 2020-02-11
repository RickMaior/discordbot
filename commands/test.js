const Discord = require('discord.js');
let axios = require("axios")

module.exports.run = async (bot, message, args) => {

  return message.reply("Command under work")

  // const filter = (reaction, user) => {
  //   return user.id === message.author.id;
  // };

  // const collected = await message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
  //   console.log("collected : ")
  //   console.log(collected.first())

  //   message.channel.send("he reacted with "+collected.first())




message.reply("Test of what?")




// axios.post("http://localhost:3000/info", {
//   body:{
//     args:args,
//     message: message.content
//   }

// }).catch(err=> message.reply("I wanst able to make the request"));


















  // message.react("😉"); /* react with an emoji to your message */
  // message
  //   .reply("i am online, did you missed me?")
  //   .then(msg => msg.delete(10000)); /* mensagem com mençao  e que se apaga*/

  // //message.channel.send(`Enviei a lista de comandos no seu privado :D`);

  // // Comando de um help que muda no pm
  // // const embedmoderation = new Discord.RichEmbed()


  // // const embedserver = new Discord.RichEmbed()
  // // .setDescription("👥 **Servidor**\n\n C poe os comandos aq Kawan")


  // // const embedcriador = new Discord.RichEmbed()
  // // .setDescription('📎 **SUPORTE**\n\n C poe os comandos aq Kawan')


  // // const ultilitarios = new Discord.RichEmbed()
  // // .setDescription("📄 **ULTILITÁRIOS**\n\n C poe os comandos aq Kawan")

  // // const helpinicial = new Discord.RichEmbed()

  // // .setDescription('\n\n:question: Ajuda | Rede Dark\n\n⚙ | Administração \n- Reaja ao emoji ⚙ para ter acesso aos meus comandos de Administração. \n\n👥 | Servidor \n- Reaja ao emoji 👥  para ter acesso aos meus comandos do servidor \n\n📎 | Suporte\n - Reaja ao emoji 📎 para ter acesso aos meus comandos de Suporte \n\n📄 | Utilitários \n- Reaja ao emoji 📄 para ter acesso aos meus comandos Utilitários')
  // // message.author.send(helpinicial).then(async msg => {

  // //     await msg.react("📄")
  // //     await msg.react("📎")
  // //     await msg.react("👥")
  // //     await msg.react("⚙")
  // //     await msg.react("🔙")
  // //    const collector = msg.createReactionCollector((r, u) => (r.emoji.name === '📄', '📎', '🔙', '👥', '⚙') && (u.id !== bot.user.id && u.id === message.author.id))
  // //     collector.on("collect", r=> {
  // //         switch(r.emoji.name) {
  // //             case '⚙':
  // //             msg.edit(embedmoderation)
  // //             break;
  // //             case '👥':
  // //             msg.edit(embedserver)
  // //             break;
  // //             case '📎':
  // //             msg.edit(embedcriador)
  // //             break;
  // //             case '📄':
  // //             msg.edit(ultilitarios)
  // //             break;
  // //             case '🔙':
  // //             msg.edit(helpinicial)
  // //             break;
  // //         }
  // //     })
  // // })




};

module.exports.help = {
  name: "Test",
  command: "test",
  aliases: ["test1", "test2"],
  helpInfo: ["A test command"],
  usage: '["on working"]'
};
