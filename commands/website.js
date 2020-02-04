
module.exports.run = async (bot, message, args) => {
    const website = "https://webpagerick.herokuapp.com/"
    message.channel.send("My website is: \n " + website)


};

module.exports.help = {
    name: "Website",
    command: "website",
    aliases: ["webpage"],
    helpInfo: ["My website"],
    usage: '["!website"]'
};
