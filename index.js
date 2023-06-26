require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

console.log("POWERING ON");
client.login(process.env.TOKEN);
client.on("ready", (c) => {
    console.log("ONLINE");
})

client.on("messageCreate", (message) => {
    if (message.author.bot) {
        return;
    }

    //message.reply(message.content);
});

client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName == "a_hey") {
        interaction.reply("hey!");
    }
    if (interaction.commandName == "a_ping") {
        interaction.reply("pong!");
    }
});