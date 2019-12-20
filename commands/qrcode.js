const axios = require("axios");
const Discord = require("discord.js");
const xRapidKey = process.env.XRapidAPIKey;

module.exports.run = async (bot, message, args) => {
	if(!args[0]){
		return message.reply("Please give me text soo i can convert to qr")
	}


	axios({
		"method": "GET",
		"url": "https://pierre2106j-qrcode.p.rapidapi.com/api",
		"headers": {
			"content-type": "application/octet-stream",
			"x-rapidapi-host": "pierre2106j-qrcode.p.rapidapi.com",
			"x-rapidapi-key": xRapidKey
		}, "params": {
			"backcolor": "ffffff",
			"pixel": "10",
			"ecl": "L %7C M%7C Q %7C H",
			"forecolor": "000000",
			"type": "text %7C url %7C tel %7C sms %7C email",
			"text": args[0]
		}
	})
		.then((response) => {
			//console.log(response)
			if(!response.data){
				return message.reply("There was an error, please contact support")
			}
			
			let qr = new Discord.Attachment(response.data, "QRcode");
			const embed = new Discord.RichEmbed()
          .setTitle("QR Code")
		  .setColor("RANDOM")
		  .setImage(response.data)
		  .setDescription("Text: " + args[0])
		  .setURL("http://qrcode.youlikeshare.com/")

		  message.channel.send(embed)

		})
		.catch((error) => {
			
		 message.reply("There was an error, please contact support")
			
			console.log(error)
		})

};

module.exports.help = {
	name: "QR Code",
	command: "qr",
	aliases: ["code", "qrcode"],
	helpInfo: ["give me a text, i give u a qr code"],
	usage: "[text to put in qr]"
};
