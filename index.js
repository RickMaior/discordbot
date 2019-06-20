/* comandos para por bot em heroku
1º-     heroku login
2º-     git init
3º-     heroku git:remote <app name inheroku>
4º-     git add .
5º-     git commit -am "nome"
6º-     git push heroku master
7º-     no heroku verificar se tem node.js em buildpacks
8º
*/

/* atualizaçao
git add .
git commit -m "lembrete de alteracao"
git push heroku master
*/

/* bot off (worker=0)   //  on (worker=1)
heroku scale worker=0
*/


/* const de links para comandos */

const Discordlink = 'https://discord.gg/zarb57n';
//const botlink = 'https://discordapp.com/oauth2/authorize?client_id=585515672826675200&scope=bot&permissions=2146958847';


/* Programa */

//onst test = require("./test.json");

const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');
var emoji = require('node-emoji')
const emojiCharacters = require('./emojiCharacters');

const bot = new Client();
const activity = 'Ping me'

const token = 'NTg1NTE1NjcyODI2Njc1MjAw.XQApew.YJ9t9xenO1ubTW7-_NsFRNHUl4w';
var prefix = '!';





bot.on('ready', () => {
    console.log('This bot is online');
    bot.user.setActivity(activity);
})





bot.on('guildMemberAdd', member => { // da mensagem quando alguem entra no server

    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if (!channel) return;

    channel.send(`Welcome to our server ${member} `)

});


bot.on('guildMemberRemove', member => { // da mensagem quando alguem sai do server

    const channel2 = member.guild.channels.find(channel2 => channel2.name === "cya");
    if (!channel2) return;

    channel2.send(`Cya ${member} `)

});


bot.on('message', async message => {

    let args = message.content.substring(prefix.length).split(" ");
    //const command = args.slice(1).toLowerCase();

    if (message.isMentioned('585515672826675200')) { console.log(message.content); }
    if (message.content.startsWith(prefix)) { console.log(message.content); }

    if (message.author.bot) return; // dont run if is a bot  //ver melhor

    if (message.channel.type === "dm") { message.reply('Now you trigered me 😡 '); return; } // para a leitura do codigo se for pm

    if (message.isMentioned('585515672826675200')) { message.reply(`If you need help just do __**${prefix}help**__`); return; }



    if (message.content.startsWith(prefix)) {
        switch (args[0]) {

            /* case 'link':
                 message.reply(links.botlink);
                 break; */

            case 'help':
                {
                    if (!args[1]) {
                        const embed = new Discord.RichEmbed()
                            .setTitle('Help')
                            .addField('ola', 'just one message', true)
                            .addField('test', 'check if i am online', true)
                            .addField('clear', 'i will clear as many messages as you want')
                            .addField('BOSS', 'only if you are boss', true)
                            .addField('pika', 'how cute', true)
                            .addField('8ball', 'ask a quesntion and i will answer it', true)
                            .addField('hi', 'just one pm message', true)
                            .addField('game', 'if you are feeling bored you can play the game of 31', false)
                            .setColor(Math.floor(Math.random() * 16777217))
                        message.member.send(embed)
                            ;
                        message.reply('You got an email 😃');
                    }
                    else {
                        switch (args[1]) {

                            case 'clear':
                                message.reply('still work in progress');
                                break;

                            case 'test':
                                message.reply('I will say hello');
                                break;

                            case 'pika':
                                const embed2
                                    = new Discord.RichEmbed()
                                        .setTitle('WHO IS THIS POKEMON?')
                                        .setColor(0xFEF65B)
                                        .setImage('https://upload.wikimedia.org/wikipedia/pt/b/b0/025_Pikachu.png')
                                message.channel.send(embed2);
                                break;

                            case '8ball':
                                message.reply('Just ask a question');
                                break;

                            case 'hi':
                                message.reply('i will pm you');
                                break;

                            case 'game':
                                message.reply('Here will be the game rules');
                                break;


                            default:
                                message.reply('invalid input');
                                break;

                        }
                    }
                }
                break;

            case 'set':
                if (!args[1]) { message.reply('pls say what you want to change') }
                else {
                    switch (args[1]) {
                        case 'prefix':
                            prefix = args[2];
                            message.reply(`Prefix changed to ${prefix}`);
                            break;

                    }
                }
                break;

            case 'test':
                message.react("👌");        /* react with an emoji to your message */
                message.reply('i am online, did you missed me?').then(msg => msg.delete(10000));                  /* mensagem com mençao  e que se apaga*/
                break;

            case 'ola':
                message.channel.send('pls use ok english'); /* Messagem sem  mençao*/
                break;

            case 'hi':
                message.member.send('Did you missed me? \nDont worry, i dont run '); /* pm o user  com duas linhas    \n  para a 2º linha*/
                break;

            case ('BOSS' || 'boss'):
                //if (!message.member.roles.find(r => r.name === "BOSS")) return message.channel.send('YOU HAVE NO PERMISSIONS') // check for the role
                message.reply('YOU ARE THE BOSS.\nBut dont forget that <@265122531114090496> is the real boss!!').then(message.react('😎')) /*  reage com o emote e messagem  com id*/
                break;

            case ('pika'):
                const attachment = new Attachment('https://upload.wikimedia.org/wikipedia/pt/b/b0/025_Pikachu.png')
                message.channel.send(message.author, attachment);
                break;



            case 'clear':


                //if (!message.member.roles.find(r => r.name === "JANITOR")) return message.channel.send('YOU HAVE NO PERMISSIONS')
                //if (!message.member.roles.find(r => r.name.hasPermission('MANAGE_MESSAGES'))) return message.channel.send('YOU HAVE NO PERMISSIONS')
                if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('YOU HAVE NO PERMISSIONS')




                if (!args[1]) return message.reply('Pls define how many you want')
                if (args[1] > 0 && args[1] < 100) {

                    /* var clear = parseInt(args[1], 10);
                     clear = clear +1;
                     message.channel.bulkDelete(clear);*/
                    message.channel.bulkDelete(parseInt(args[1], 10) + 1);

                }


                else { message.reply('Put a valid number') }
                break;

            case '8ball':
                if (!args[1]) { message.reply('Pls do a question'); break; }



                let randomNumber = Math.floor(Math.random() * 8);

                let eightBall = '';

                switch (randomNumber) {
                    case 0:
                        eightBall = 'It is certain';
                        break;
                    case 1:
                        eightBall = 'It is decidedly so';
                        break;
                    case 2:
                        eightBall = 'Reply hazy try again';
                        break;
                    case 3:
                        eightBall = 'Cannot predict now';
                        break;
                    case 4:
                        eightBall = 'Do not count on it';
                        break;
                    case 5:
                        eightBall = 'My sources say no';
                        break;
                    case 6:
                        eightBall = 'Outlook not soo good';
                        break;
                    case 7:
                        eightBall = 'Signs point to yes';
                        break;
                }
                message.reply(eightBall)
                break;



            case 'thumbs':
                message.react('👍').then(() => message.react('👎'));

                const filter2 = (reaction, user) => {
                    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
                };

                message.awaitReactions(filter2, { max: 1, time: 60000, errors: ['time'] })
                    .then(collected => {
                        const reaction = collected.first();

                        if (reaction.emoji.name === '👍') {
                            message.reply('you reacted with a thumbs up.');
                        } else {
                            message.reply('you reacted with a thumbs down.');
                        }
                    })
                    .catch(collected => {
                        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
                        message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                    });

                break;

            case 'emoji':

                message.react('😎')
                    .then(() => message.react('😡'))
                    .then(() => message.react('1⃣'))
                    .then(() => message.react('590998760151056436'))
                    .catch(() => console.error('One of the emojis failed to react.'));
                break;

            case 'emoji2':
                message.react(emojiCharacters.a); // 🇦
                message.react(emojiCharacters[10]); // 🔟
                message.react(emojiCharacters['!']); // ❗
                break;

            case 'game':
                var total = 0
                const prompt = await message.channel.send("Choose your number"); // evia mensagem e da lhe o nome




                const react = (message) => {
                    message.react(emojiCharacters[1])                    // vai reagir com emoji de 1 a 3
                        .then(() => message.react(emojiCharacters[2]))
                        .then(() => message.react(emojiCharacters[3]));
                }  // reaçao do emoji de 1 a 3


                const filter3 = (reaction, user) => {
                    return [emojiCharacters[1], emojiCharacters[2], emojiCharacters[3]].includes(reaction.emoji.name) && user.id === message.author.id;
                }; // so reage se apenas for usados emojis certos e a pessoa que enviou a primeira mensagem

                react(prompt);

                await prompt.awaitReactions(filter3, {// funcçao que permite enviar emotes e depois verificar qual emote foi escolhido
                    max: 1, time: 60000, errors: ['time']
                })
                    .then(collected => {
                        const reaction = collected.first();


                        switch (reaction.emoji.name) {
                            case emojiCharacters[1]:
                                console.log('number=1')
                                message.reply('You choose 1');
                                total = total + 1;
                                break;
                            case emojiCharacters[2]:
                                console.log('number=2')
                                message.reply('You choose 2');
                                total = total + 2;
                                break;
                            case emojiCharacters[3]:
                                console.log('number=3')
                                message.reply('You choose 3');
                                total = total + 3;
                                break;

                        }

                    })
                    .catch(collected => {
                        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
                        message.reply('TIME OUT ⏰\nYou didnt picked a number, you just lost\nTry again later');
                    });




                await message.channel.send(`O total é ${total}`)

                break;


            /* default:
                  message.reply(`Put a valid command\nIf you dont know what you can use try __**${prefix}help**__`);
                  break;    */
        }

    }

})



bot.login(token);
