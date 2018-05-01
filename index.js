var bigBoard = require('./lib/bigboard'),
    { IncomingWebhook, WebClient} = require('@slack/client'),
    config = require('./config.json');

const web = new WebClient(config.slackToken);
var lastMessage = false;

var checkMessages = () => {
  web.channels.history({
    channel: config.slackChannel,
    count: 5
  }).then(response => {
    if(response.ok && lastMessage != response.messages[0].text) {
      bigBoard(config, response.messages[0].text);
      lastMessage = response.messages[0].text;
    }
  });
  setTimeout(checkMessages, 5000);
};

checkMessages();
