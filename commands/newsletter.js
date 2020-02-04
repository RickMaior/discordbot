const { messageCollect } = require("../utils/messageFuctions.js");
 const sgMail = require('@sendgrid/mail');

//check emails:
// https://www.mail-tester.com/
// https://mailtester.com/


module.exports.run = async (bot, message, args) => {

    message.reply("Command not working")
    //TODO: make email work
    // const email = await messageCollect("What is your email?", message);
    // console.log("email: " + email)


   
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   
    // const msg = {
    //     to: 'test@example.com',
    //     from: 'test@example.com',
    //     subject: 'Sending with Twilio SendGrid is Fun',
    //     text: 'and easy to do anywhere, even with Node.js',
    //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // };
    // sgMail.send(msg);
    // console.log("emailsend")
    // console.log(msg)



};

module.exports.help = {
    name: "NewsLetter",
    command: "newsletter",
    aliases: ["email"],
    helpInfo: ["I will send email to you"],
    usage: '["!newsletter"]'
};
