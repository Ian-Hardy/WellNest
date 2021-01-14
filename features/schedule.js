var fs = require('fs');

module.exports = function( controller ) {

    controller.hears( "schedule", 'message,direct_message', async ( bot,message ) => {

        await bot.reply( message,'Let me bring out a card for you to fill out' );
        await bot.reply( message, { markdown: 'Try `help` to see available commands', attachments: [
            {
              "contentType": "application/vnd.microsoft.card.adaptive",
              "content": {
                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                "type": "AdaptiveCard",
                "version": "1.0",
                "body": [
                  {
                    "type": "ColumnSet",
                    "columns": [
                      {
                        "type": "Column",
                        "width": 2,
                        "items": [
                          {
                            "type": "TextBlock",
                            "text": "WellNest scheduling",
                            "weight": "bolder",
                            "size": "medium"
                          },
                          
                          {
                            "type": "TextBlock",
                            "text": "What date would you like to start the session?",
                            "wrap": true
                          },
                          {
                            "type": "Input.Date",
                            "id": "theDate",
                          },
                          {
                            "type": "TextBlock",
                            "text": "What time would you like the session to start?",
                            "wrap": true
                          },
                          {
                            "type": "Input.Time",
                            "id" : "Time",
                          },
                        
                        ]
                      },
                    ]
                  }
                ],
                "actions": [
                  {
                    "type": "Action.Submit",
                    "title": "Submit"
                  }
                ]
              }
            }
          ]});
        })
        controller.on( 'attachmentActions', async ( bot, message ) => {

            let hostName = message.value.vmlist;

            await bot.reply( message, {
                text: 'Thank you! We will send you a notification about the session on the specified time ',
                attachments: [
                    
                ],
            });
        });


    controller.commandHelp.push( { command: 'schedule', text: 'schedule your sessions!' } );

}

