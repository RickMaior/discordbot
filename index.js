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
const botlink = 'https://discordapp.com/oauth2/authorize?client_id=585515672826675200&scope=bot&permissions=2146958847';


/* Programa */

const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');
const bot = new Client();
const activity = '!help -> for help'

const token = 'NTg1NTE1NjcyODI2Njc1MjAw.XP2IFA.NG1tlXnd_y2VUSvw5QgFghbpzBI';
var prefix = '!';





bot.on('ready', () => {
    console.log('This bot is online');
    bot.user.setActivity(activity);
})

//if(message.author.bot) return; // dont run if is a bot  ver melhor



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


bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");
    //const command = args.slice().toLowerCase();



    switch (args[0]) {
        case 'test':
            message.react("👌");        /* react with an emoji to your message */
            message.reply('i am online, did you missed me?').then(msg => msg.delete(10000));                  /* mensagem com mençao  e que se apaga*/
            break;

        case 'ola':
            message.channel.send('pls use ok english'); /* Messagem sem  mençao*/
            break;

        case ('BOSS' || 'boss'):
            if (!message.member.roles.find(r => r.name === "BOSS")) return message.channel.send('YOU HAVE NO PERMISSIONS')
            message.reply('YOU ARE THE BOSS').then(message.react('😎')) /*  verifica se a pessoa tem a role "boss" e caso  tenha reage com o emote e messagem */
            break;

        case ('pika'):
            const attachment = new Attachment('https://upload.wikimedia.org/wikipedia/pt/b/b0/025_Pikachu.png')
            message.channel.send(message.author, attachment);
            break;

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
                        .setColor(0xFFD264)
                    message.channel.send(embed);
                    ;
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

                        

                        default:
                            message.reply('invalid input');
                            break;

                    }
                }
            }
            break;

        case 'clear':
            if (!message.member.roles.find(r => r.name === "JANITOR")) return message.channel.send('YOU HAVE NO PERMISSIONS')
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

            let eightBall ='';

            switch (randomNumber) {
                case 0:
                    eightBall ='It is certain';
                    break;
                case 1:
                    eightBall='It is decidedly so';
                    break;
                case 2:
                    eightBall='Reply hazy try again';
                    break;
                case 3:
                    eightBall='Cannot predict now';
                    break;
                case 4:
                    eightBall='Do not count on it';
                    break;
                case 5:
                    eightBall='My sources say no';
                    break;
                case 6:
                    eightBall='Outlook not soo good';
                    break;
                case 7:
                    eightBall='Signs point to yes';
                    break;
                    }
                    message.reply(eightBall)
            break;
            
    }
})



bot.login(token);
