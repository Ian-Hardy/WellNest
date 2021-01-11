//
// Respond to various 'hello' words, attach file by URL and from local file system
var fs = require('fs');

module.exports = function( controller ) {

    controller.hears( [ 'hi','hello','howdy','hey','aloha','hola','bonjour','oi' ], 'message,direct_message', async ( bot,message ) => {

        await bot.reply( message,'Greetings!' );
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
                            "text": "Tell us about yourself",
                            "weight": "bolder",
                            "size": "medium"
                          },
                          {
                            "type": "TextBlock",
                            "text": "We just need a few more details to get you booked for the trip of a lifetime!",
                            "isSubtle": true,
                            "wrap": true
                          },
                          {
                            "type": "TextBlock",
                            "text": "Don't worry, we'll never share or sell your information.",
                            "isSubtle": true,
                            "wrap": true,
                            "size": "small"
                          },
                          {
                            "type": "TextBlock",
                            "text": "Your name",
                            "wrap": true
                          },
                          {
                            "type": "Input.Text",
                            "id": "Name",
                            "placeholder": "John Andersen"
                          },
                          {
                            "type": "TextBlock",
                            "text": "Your website",
                            "wrap": true
                          },
                          {
                            "type": "Input.Text",
                            "id" : "Url",
                            "placeholder": "https://example.com"
                          },
                          {
                            "type": "TextBlock",
                            "text": "Your email",
                            "wrap": true
                          },
                          {
                            "type": "Input.Text",
                            "id": "Email",
                            "placeholder": "john.andersen@example.com",
                            "style": "email"
                          },
                          {
                            "type": "TextBlock",
                            "text": "Phone Number"
                          },
                          {
                            "type": "Input.Text",
                            "id": "Tel",
                            "placeholder": "+1 408 526 7209",
                            "style": "tel"
                          }
                        ]
                      },
                      {
                        "type": "Column",
                        "width": 1,
                        "items": [
                          {
                            "type": "Image",
                            "url": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Diver_Silhouette%2C_Great_Barrier_Reef.jpg",
                            "size": "auto"
                          }
                        ]
                      }
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
          ]} );
      });

    controller.hears( 'url', 'message,direct_message', async ( bot,message ) => {

        await bot.reply( message, {
            text: 'Aww!',
            files: [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Youngkitten.JPG/220px-Youngkitten.JPG' ]
        });
    })

    controller.hears( 'local', 'message,direct_message' , async ( bot,message ) => {
        await bot.reply( message, {
            text: 'The source code',
            files: [ fs.createReadStream( './bot.js' ) ]
        })
    })

    controller.commandHelp.push( { command: 'hello', text: 'Greetings!' } );
    controller.commandHelp.push( { command: 'url', text: 'Attach a file via URL' } );
    controller.commandHelp.push( { command: 'local', text: 'Attach a file from the local file system' } );

}