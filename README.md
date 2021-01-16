
Assuming you plan to us [ngrok](https://ngrok.com) to give your bot a publically available URL (optional, see above), you can run this template in a jiffy:

1. Clone this repo:

    ```sh
    git clone https://github.com/danielabedian/WellNest

    cd WellNest
    ```

1. Install the Node.js dependencies:

    ```sh
    npm install
    ```

1. Create a Webex Teams bot account at ['Webex for Developers'](https://developer.webex.com/my-apps/new/bot), and note/save your bot's access token

1. Launch Ngrok to expose port 3000 of your local machine to the internet:

    ```sh
    ngrok http 3000
    ```

    Note/save the 'Forwarding' HTTPS (not HTTP) address that ngrok generates
    Paste the forwarding https to the .env file for the PUBLIC_URL


1. You're ready to run your bot:

    ```sh
    node bot.js
    ```
1. making sure the website is running. We have hosted our website using a third party but will be providing the html/css files in this project. Simply change the links in the features/links.js file if necessary.