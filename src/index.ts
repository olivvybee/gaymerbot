import { Client, GatewayIntentBits } from 'discord.js';
import { config as loadEnv } from 'dotenv';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', (loggedInClient) => {
  console.log(`Logged in as ${loggedInClient.user.tag}!`);
});

loadEnv();
const { DISCORD_BOT_TOKEN } = process.env;
if (!DISCORD_BOT_TOKEN) {
  throw new Error('DISCORD_BOT_TOKEN environment variable not found.');
}
client.login(DISCORD_BOT_TOKEN);
