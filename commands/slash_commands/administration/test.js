const { CommandInteraction, ApplicationCommandType, EmbedBuilder, ApplicationCommandOptionType, ButtonBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonStyle, TextInputBuilder, ModalBuilder, AttachmentBuilder, ApplicationCommandPermissionsManager, bold } = require("discord.js");
const { sendReply } = require('../../../utils/utils');
const { v4: uuidv4 } = require('uuid');
const fetch = require('node-fetch');
const path = require("path");

module.exports = {
    name: `test`,
    description: `dummy command`,
    defaultMemberPermissions: ['Administrator'],
    cooldown: 0,
    type: ApplicationCommandType.ChatInput,
    /**
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction, client) {
        const { options, member, guild, channel, user } = interaction;

        await interaction.deferReply({ ephemeral: true }).catch(err => console.error(`${path.basename(__filename)} There was a problem deferring an interaction: `, err));

        interaction.deleteReply();
    }
}