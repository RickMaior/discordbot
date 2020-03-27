const { messageAuthorCollect } = require("../utils/messageFunctions.js");
const sgMail = require('@sendgrid/mail');
var nodemailer = require('nodemailer');

//check emails:
// https://www.mail-tester.com/
// https://mailtester.com/


module.exports.run = async (bot, message, args) => {
    return message.reply("Command under work")

   // message.reply("Command not working")
    //TODO: make email work
    const email = await messageAuthorCollect("What is your email?", message);
    console.log("email: " + email)



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


    

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAILPASSWORD
        }
    });

    var mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Pegasus Newsletter',
        text: 'This is an automatic message, pls dont reply to this email. If you want to unsuscribe to this go to pegasus discord channel'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            message.author.send("There was an error sending the email, please try again.")
            console.log(error);
        } else {
            message.author.send("Email sended")
            console.log('Email sent: ' + info.response);
        }
    });


};

module.exports.help = {
    name: "NewsLetter",
    command: "newsletter",
    aliases: ["email"],
    helpInfo: ["I will send email to you"],
    usage: '["!newsletter"]'
};
