const bedrock = require('bedrock-protocol');
const express = require('express');
const app = express();

const bot = bedrock.createClient({
  host: 'moggers-LVVA.aternos.me',
  port: 38909,
  username: 'AFK_Bot',
  offline: true
});

bot.on('spawn', () => {
  console.log('? Bot joined the server!');
});

bot.on('disconnect', (packet) => {
  console.log('? Bot disconnected:', packet);
});

app.get('/', (req, res) => {
  res.send('AFK Bot is running!');
});

app.listen(3000, () => {
  console.log('?? HTTP server started on port 3000');
});