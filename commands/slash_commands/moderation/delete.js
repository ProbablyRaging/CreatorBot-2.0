const { CommandInteraction, ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');
const path = require('path');

module.exports = {
    name: `delete`,
    description: `Delete a specific number of messages from a channel or user`,
    access: 'staff',
    cooldown: 10,
    usage: `/delete [amount] (@username)`,
    options: [{
        name: `amount`,
        description: `Number of messages to delete`,
        type: ApplicationCommandOptionType.Number,
        required: true
    },
    {
        name: `username`,
        description: `Include a username to delete their messages only`,
        type: ApplicationCommandOptionType.User,
        required: false
    }],
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        const { guild, member, channel, options } = interaction;

        const amount = options.getNumber('amount');
        const target = options.getMember('username');

        const fetchMsg = await channel.messages.fetch();

        if (!guild.members.me.permissionsIn(channel).has('ManageMessages') || !guild.members.me.permissionsIn(channel).has('SendMessages') || !guild.members.me.permissionsIn(channel).has('ViewChannel')) {
            return interaction.reply({
                content: `${process.env.BOT_DENY} I do not have to proper permissions for ${channel}`,
                ephemeral: true
            }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending an interaction: `, err));
        }

        if (fetchMsg.size < 1) {
            return interaction.reply({
                content: `${process.env.BOT_INFO} I could not find any messages from ${target} in ${channel}`,
                ephemeral: true
            }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending an interaction: `, err));
        }

        if (amount < 1 && member.id === process.env.OWNER_ID || amount > 100 && member.id === process.env.OWNER_ID ) {
            return interaction.reply({
                content: `${process.env.BOT_INFO} Amount must be between 1 and 100`,
                ephemeral: true
            }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending an interaction: `, err));
        }

        if (amount < 1 || amount > 5 && member.id !== process.env.OWNER_ID) {
            return interaction.reply({
                content: `${process.env.BOT_INFO} Amount must be between 1 and 5`,
                ephemeral: true
            }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending an interaction: `, err));
        } else {
            if (!target && member.id !== process.env.OWNER_ID) {
                return interaction.reply({
                    content: `${process.env.BOT_INFO} You must include a username`,
                    ephemeral: true
                }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending an interaction: `, err));
            } else {
                if (target) {
                    let i = 0;
                    const filtered = [];

                    (await fetchMsg).filter(msg => {
                        if (msg.author.id === target.id && amount > i) {
                            filtered.push(msg);
                            i++;
                        }
                    })
                    channel.bulkDelete(filtered, true).catch(err => console.error(`${path.basename(__filename)} There was a problem deleting a message: `, err)).then(deleted => {
                        interaction.reply({
                            content: `${process.env.BOT_CONF} ${deleted.size} messages from ${target} deleted in ${channel}`,
                            ephemeral: true
                        }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending an interaction: `, err));
                    });
                } else {
                    channel.bulkDelete(amount, true).catch(err => console.error(`${path.basename(__filename)} There was a problem deleting a message: `, err)).then(deleted => {
                        interaction.reply({
                            content: `${process.env.BOT_CONF} ${deleted.size} messages deleted in ${channel}`,
                            ephemeral: true
                        }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending an interaction: `, err));
                    });
                }
            }
        }
    }
}