const {messageAuthorCollect} = require("./messageFunctions.js")

//Asks on dm what is webhook url and returns an objet with id and token
async function  webHookByURL(message) {
    const hook = await messageAuthorCollect("What is the webhook url",message)
    const parts = await hook.split('/');
    return { id: parts[parts.length - 2], token: parts[parts.length -1] };
}


//Asks on dm what is the webhook id and what is webhook token and return an objet with those values
async function  webHookByIdToken(message) {
    const hookID = await messageAuthorCollect("What is the webhook id",message)
    const hookToken = await messageAuthorCollect("What is the webhook token",message)
    return { id:hookID , token:hookToken  };
}


module.exports = {
    webHookByURL,
    webHookByIdToken,
}