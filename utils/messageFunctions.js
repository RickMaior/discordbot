

// Sends a message on private message and returns what the person answer
function messageAuthorCollect(messageSend, message) {
    const filter = m => !m.author.bot && m.attachments.size == 0;

    return message.author.send(messageSend).then(msg => msg.channel.awaitMessages(filter, { max: 1, time: 60 * 1000, errors: ['time'] })
        .then(collected => {
            return collected.first().content
            //message.author.send("Your answer is: \n" + collected.first().content)

        })
        .catch(() => message.author.send("You didnt send any message,your report was canceled, please try again"))
    )

}


// Sends a message on same channel of message and returns what the person answer
function messageChannelCollect(messageSend, message) {
    const filter = m => m.author.id === message.author.id && m.attachments.size == 0;

    return message.channel.send(messageSend).then(msg => msg.channel.awaitMessages(filter, { max: 1, time: 60 * 1000, errors: ['time'] })
        .then(collected => {
            return collected.first().content
        })
        .catch(() => message.channel.send("You didnt send any message,your report was canceled, please try again"))
    )

}


module.exports = {
    messageAuthorCollect,
    messageChannelCollect

}