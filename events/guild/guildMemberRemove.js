const introSchema = require('../../schemas/intro_schema');
const { dbFindOne } = require('../../utils/utils');
const path = require('path');

module.exports = {
    name: 'guildMemberRemove',
    async execute(member, client, Discord) {
        const guild = client.guilds.cache.get(process.env.GUILD_ID);
        const joinLeaveChan = client.channels.cache.get(process.env.JOINLEAVE_CHAN);
        const introChan = client.channels.cache.get(process.env.INTRO_CHAN);

        // Remove user's introduction message if one exists
        const result = await dbFindOne(introSchema, { userId: member.id });
        if (result && result.messageId) {
            const introMessage = await introChan.messages.fetch(result.messageId).catch(() => { });
            if (introMessage) introMessage.delete();
        }

        // Log to channel
        joinLeaveChan.send({
            content: `${process.env.BOT_LEAVE} ${member} left. There are now **${guild.memberCount}** members in the server`,
            allowedMentions: { parse: [] }
        }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending a message: `, err));
    }
}