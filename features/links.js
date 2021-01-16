/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    controller.hears('flexibility','message,direct_message', async (bot, message) => {
        await bot.reply(message, 'https://danielabedian.github.io/flexibility.html');
    });

    controller.hears('meditation','message,direct_message', async (bot, message) => {
        await bot.reply(message, 'https://danielabedian.github.io/meditation.html');
    });

    controller.hears('fitness','message,direct_message', async (bot, message) => {
        await bot.reply(message, 'https://danielabedian.github.io/fitness.html');
    });
    controller.hears('explore','message,direct_message', async (bot, message) => {
        await bot.reply(message, 'https://danielabedian.github.io/');
    });
    controller.on('message', async (bot, message) => {
        console.log("MESSAGE from: " + message.personEmail);
        await bot.reply(message, `Echo: ${ message.text }`);
    });
    controller.commandHelp.push( { command: 'flexibility', text: 'Receive a link to a playlist of flexibility videos' } );
    controller.commandHelp.push( { command: 'meditation', text: 'Receive a link to a playlist of meditation videos' } );
    controller.commandHelp.push( { command: 'fitness', text: 'Receive a link to a playlist of fitness videos' } );
    controller.commandHelp.push( { command: 'explore', text: 'Receive a link to a our main website' } );
}
