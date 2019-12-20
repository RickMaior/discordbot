const axios = require("axios");
const Discord = require("discord.js");
const xRapidKey = process.env.XRapidAPIKey;

module.exports.run = async (bot, message, args) => {

    let validCategory = ["programming", "miscellaneous", "dark", "any"]

    args[0] ? category = args[0].toLowerCase() : category = "any";
    console.log("category : " + category);

    if (!validCategory.includes(category)) {
        return message.reply("Please put a valid  category.\nThe valid categorys are: programming , miscellaneous , dark and any")
    }

    axios({
        "method": "GET",
        "url": "https://jokeapi.p.rapidapi.com/category/" + category,
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "jokeapi.p.rapidapi.com",
            "x-rapidapi-key": xRapidKey
        }, "params": {
            "format": "json"
        }
    })
        .then((response) => {
            console.log(response)

            const embed = new Discord.RichEmbed()
                .setTitle("Joke")
                .setColor("RANDOM")
                .setDescription("")
                .addField("Category: ", response.data.category)
                .setFooter("ID: " + response.data.id)
                .setURL("https://sv443.net/r/submitJoke")

            if (response.data.type === "twopart") {
                embed

                    .setDescription(response.data.setup + "\n ||" + response.data.delivery + "||")

            } else {
                if (response.data.type === "single") {

                    embed
                        .setDescription(response.data.joke)
                }
            }



            message.channel.send(embed)
        })
        .catch((error) => {
            console.log(error)
            return message.reply("There was an error, please contact support")
        })











};

module.exports.help = {
    name: "Joke",
    command: "joke",
    aliases: ["comic"],
    helpInfo: ["Pick a theme and i give you a joke"],
    usage: "[category]"
};
