const { ContextMenuInteraction, ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');
const path = require('path');

module.exports = {
    name: `say`,
    description: `Send a channel message as the bot`,
    cooldown: 0,
    type: ApplicationCommandType.ChatInput,
    options: [{
        name: `message`,
        description: `The message you want to send`,
        type: ApplicationCommandOptionType.String,
        required: false,
    },
    {
        name: `channel`,
        description: `The channel to send the message to. Leave black for current channel`,
        type: ApplicationCommandOptionType.Channel,
        required: false,
    },
    {
        name: `image`,
        description: `If you want to send an image as well`,
        type: ApplicationCommandOptionType.String,
        required: false,
    }],
    /**
     * 
     * @param {ContextMenuInteraction} interaction 
     */
    execute(interaction) {
        const { channel, options } = interaction;

        const toChannel = options.getChannel('channel');
        const message = options.getString('message') || ` `;
        const image = options.getString('image');

        if (!toChannel) {
            if (image) {
                channel.send({
                    content: `${message}`,
                    files: [image]
                }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending a message: `, err));
            } else {
                channel.send({
                    content: `${message}`
                }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending a message: `, err));
            }
        } else {
            if (image) {
                toChannel.send({
                    content: `${message}`,
                    files: [image]
                }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending a message: `, err));
            } else {
                toChannel.send({
                    content: `${message}`
                }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending a message: `, err));
            }
        }

        interaction.reply({
            content: `${process.env.BOT_CONF} Message sent`,
            ephemeral: true
        }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending an interaction: `, err));
    }
}