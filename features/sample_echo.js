/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    controller.hears('sample','message,direct_message', async (bot, message) => {
        await bot.reply(message, 'I heard a sample message.');
    });
    controller.hears('flexibility','message,direct_message', async (bot, message) => {
        await bot.reply(message, 'https://www.youtube.com/watch?v=sTANio_2E0Q');
    });

    controller.on('message', async (bot, message) => {
        console.log("MESSAGE from: " + message.personEmail);
        await bot.reply(message, `Echo: ${ message.text }`);
    });
    controller.commandHelp.push( { command: 'flexibility', text: 'Receive a list of flexibility videos' } );
}
