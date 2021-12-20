const { CommandInteraction } = require('discord.js');

module.exports = {
    name: `delete`,
    description: `Deletes a specified number of messages from a channel or user`,
    permission: `ADMINISTRATOR`,
    options: [{
        name: `amount`,
        description: `Number of messages to delete`,
        type: `NUMBER`,
        required: true
    },
    {
        name: `username`,
        description: `Include a username to delete their messages only`,
        type: `USER`,
        required: false
    }],
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        const { member, channel, options } = interaction;

        const amount = options.getNumber('amount');
        const target = options.getMember('username');

        const fetchMsg = await channel.messages.fetch();

        if (amount > 5 && member.id !== process.env.OWNER_ID) {
            await interaction.reply({
                content: `${process.env.BOT_INFO} \`Amount must be between 1 and 5\``,
                ephemeral: true
            })
            return;
        } else {
            if (!target && member.id !== process.env.OWNER_ID) {
                await interaction.reply({
                    content: `${process.env.BOT_INFO} \`You must include a username\``,
                    ephemeral: true
                })
                return;
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
                    await channel.bulkDelete(filtered, true).then(deleted => {
                        interaction.reply({
                            content: `${process.env.BOT_CONF} \`${deleted.size} messages from ${target.user.tag} deleted in #${channel.name}\``,
                            ephemeral: true
                        })
                    })
                } else {
                    await channel.bulkDelete(amount, true).then(deleted => {
                        interaction.reply({
                            content: `${process.env.BOT_CONF} \`${deleted.size} messages deleted in #${channel.name}\``,
                            ephemeral: true
                        })
                    })
                }
            }
        }
    }
}