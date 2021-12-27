const { Message, MessageEmbed } = require('discord.js');
const path = require('path');
/**
 * 
 * @param {Message} message 
 */
module.exports = (message, client, Discord) => {
    const guild = client.guilds.cache.get(process.env.GUILD_ID);
    const blChan = client.channels.cache.get(process.env.BL_CHAN);
    const muteChan = client.channels.cache.get(process.env.MUTES_CHAN);

    const member = message?.member;

    if (!member?.roles?.cache.has(process.env.STAFF_ROLE) && !message?.author?.bot && message?.mentions?.members?.size > 4) {
        member?.send({
            content: `${process.env.BOT_DENY} \`Mass mentions (${message?.mentions?.members?.size}) detected. You have been timedout for 30 seconds to prevent spamming\``
        }).catch(() => {
            message?.reply({
                content: `${process.env.BOT_DENY} \`Mass mentions (${message?.mentions?.members?.size}) detected. You have been timedout for 30 seconds to prevent spamming\``,
                deleteallowedMentions: { repliedUser: true },
                failIfNotExists: false
            }).catch(err => {
                console.error(`${path.basename(__filename)} There was a problem sending a message: `, err);
            }).then(msg => {
                setTimeout(() => { msg?.delete().catch(err => console.error(`${path.basename(__filename)} There was a problem deleting a message: `, err)) }, 5000);
            });
        });

        setTimeout(() => { message?.delete().catch(err => console.error(`${path.basename(__filename)} There was a problem deleting a message: `, err)) }, 600);

        member?.timeout(30000, 'Mass mentions').catch(err => console.error(`${path.basename(__filename)} There was a problem adding a timeout: `, err));

        const msgContent = message?.content.slice(0, 1000) + '...' || ` `;

        const blacklistEmbed = new Discord.MessageEmbed()
            .setAuthor({ name: `${message?.author?.tag}'s message was deleted`, iconURL: message?.author?.displayAvatarURL({ dynamic: true }) })
            .setColor("#E04F5F")
            .addField("Author", `<@${message?.author?.id}>`, true)
            .addField("Channel", `${message?.channel}`, true)
            .addField("Reason", `Mass mentions`, true)
            .addField('Message', `\`\`\`${msgContent}\`\`\``)
            .setFooter(`${guild?.name}`, `${guild?.iconURL({ dynamic: true })}`)
            .setTimestamp()

        const muteEmbed = new MessageEmbed()
            .setColor('#E04F5F')
            .setAuthor({ name: `${message?.author?.tag} has been auto timedout`, iconURL: message?.author?.displayAvatarURL({ dynamic: true }) })
            .addField(`By:`, `${client.user.id}`, false)
            .addField(`Reason:`, `\`\`\`Mass mentions - 30 second timeout\`\`\``, false)
            .setFooter(`${guild.name}`, `${guild.iconURL({ dynamic: true })}`)
            .setTimestamp()

        blChan.send({
            embeds: [blacklistEmbed]
        }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending a log: `, err));

        muteChan.send({
            embeds: [muteEmbed]
        }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending a log: `, err));
    }
}

