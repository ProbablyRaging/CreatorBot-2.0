const emojis = require('../../lists/role-emojis');
const path = require('path');

module.exports = {
    name: 'messageReactionAdd',
    async execute(reaction, user, client, Discord) {
        const guild = client.guilds.cache.get(process.env.GUILD_ID);

        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;

        const member = guild.members.cache.find(member => member?.id === user.id);

        if (reaction.emoji.name === 'twitch') roleId = emojis.twitch;
        if (reaction.emoji.name === 'youtube') roleId = emojis.youtube;
        if (reaction.emoji.name === 'instagram') roleId = emojis.instagram;
        if (reaction.emoji.name === 'tiktok') roleId = emojis.tiktok;
        if (reaction.emoji.name === '📢') roleId = emojis.r;
        if (reaction.emoji.name === '🎲') roleId = emojis.s;
        if (reaction.emoji.name === '📣') roleId = emojis.t;

        if (reaction.emoji.name === '🔵') {
            roleId = emojis.a;

            if (member?.roles?.cache.has(emojis.b) || member?.roles?.cache.has(emojis.c) || member?.roles?.cache.has(emojis.d) || member?.roles?.cache.has(emojis.e) || member?.roles?.cache.has(emojis.f) || member?.roles?.cache.has(emojis.g)) {
                reaction.message.reactions.resolve('🔴').users.remove(member?.id);
                reaction.message.reactions.resolve('🟢').users.remove(member?.id);
                reaction.message.reactions.resolve('🟠').users.remove(member?.id);
                reaction.message.reactions.resolve('🟡').users.remove(member?.id);
                reaction.message.reactions.resolve('🌸').users.remove(member?.id);
                reaction.message.reactions.resolve('🟣').users.remove(member?.id);
                member?.roles?.remove(emojis.b);
                member?.roles?.remove(emojis.c);
                member?.roles?.remove(emojis.d);
                member?.roles?.remove(emojis.e);
                member?.roles?.remove(emojis.f);
                member?.roles?.remove(emojis.g);
            }
        }

        if (reaction.emoji.name === '🔴') {
            roleId = emojis.b;

            if (member?.roles?.cache.has(emojis.a) || member?.roles?.cache.has(emojis.c) || member?.roles?.cache.has(emojis.d) || member?.roles?.cache.has(emojis.e) || member?.roles?.cache.has(emojis.f) || member?.roles?.cache.has(emojis.g)) {
                reaction.message.reactions.resolve('🔵').users.remove(member?.id);
                reaction.message.reactions.resolve('🟢').users.remove(member?.id);
                reaction.message.reactions.resolve('🟠').users.remove(member?.id);
                reaction.message.reactions.resolve('🟡').users.remove(member?.id);
                reaction.message.reactions.resolve('🌸').users.remove(member?.id);
                reaction.message.reactions.resolve('🟣').users.remove(member?.id);
                member?.roles?.remove(emojis.a);
                member?.roles?.remove(emojis.c);
                member?.roles?.remove(emojis.d);
                member?.roles?.remove(emojis.e);
                member?.roles?.remove(emojis.f);
                member?.roles?.remove(emojis.g);
            }
        }

        if (reaction.emoji.name === '🟢') {
            roleId = emojis.c;

            if (member?.roles?.cache.has(emojis.a) || member?.roles?.cache.has(emojis.b) || member?.roles?.cache.has(emojis.d) || member?.roles?.cache.has(emojis.e) || member?.roles?.cache.has(emojis.f) || member?.roles?.cache.has(emojis.g)) {
                reaction.message.reactions.resolve('🔵').users.remove(member?.id);
                reaction.message.reactions.resolve('🔴').users.remove(member?.id);
                reaction.message.reactions.resolve('🟠').users.remove(member?.id);
                reaction.message.reactions.resolve('🟡').users.remove(member?.id);
                reaction.message.reactions.resolve('🌸').users.remove(member?.id);
                reaction.message.reactions.resolve('🟣').users.remove(member?.id);
                member?.roles?.remove(emojis.a);
                member?.roles?.remove(emojis.b);
                member?.roles?.remove(emojis.d);
                member?.roles?.remove(emojis.e);
                member?.roles?.remove(emojis.f);
                member?.roles?.remove(emojis.g);
            }
        }

        if (reaction.emoji.name === '🟠') {
            roleId = emojis.d;

            if (member?.roles?.cache.has(emojis.a) || member?.roles?.cache.has(emojis.b) || member?.roles?.cache.has(emojis.c) || member?.roles?.cache.has(emojis.e) || member?.roles?.cache.has(emojis.f) || member?.roles?.cache.has(emojis.g)) {
                reaction.message.reactions.resolve('🔵').users.remove(member?.id);
                reaction.message.reactions.resolve('🔴').users.remove(member?.id);
                reaction.message.reactions.resolve('🟢').users.remove(member?.id);
                reaction.message.reactions.resolve('🟡').users.remove(member?.id);
                reaction.message.reactions.resolve('🌸').users.remove(member?.id);
                reaction.message.reactions.resolve('🟣').users.remove(member?.id);
                member?.roles?.remove(emojis.a);
                member?.roles?.remove(emojis.b);
                member?.roles?.remove(emojis.c);
                member?.roles?.remove(emojis.e);
                member?.roles?.remove(emojis.f);
                member?.roles?.remove(emojis.g);
            }
        }

        if (reaction.emoji.name === '🟡') {
            roleId = emojis.e;

            if (member?.roles?.cache.has(emojis.a) || member?.roles?.cache.has(emojis.b) || member?.roles?.cache.has(emojis.c) || member?.roles?.cache.has(emojis.d) || member?.roles?.cache.has(emojis.f) || member?.roles?.cache.has(emojis.g)) {
                reaction.message.reactions.resolve('🔵').users.remove(member?.id);
                reaction.message.reactions.resolve('🔴').users.remove(member?.id);
                reaction.message.reactions.resolve('🟢').users.remove(member?.id);
                reaction.message.reactions.resolve('🟠').users.remove(member?.id);
                reaction.message.reactions.resolve('🌸').users.remove(member?.id);
                reaction.message.reactions.resolve('🟣').users.remove(member?.id);
                member?.roles?.remove(emojis.a);
                member?.roles?.remove(emojis.b);
                member?.roles?.remove(emojis.c);
                member?.roles?.remove(emojis.d);
                member?.roles?.remove(emojis.f);
                member?.roles?.remove(emojis.g);
            }
        }

        if (reaction.emoji.name === '🌸') {
            roleId = emojis.f;

            if (member?.roles?.cache.has(emojis.a) || member?.roles?.cache.has(emojis.b) || member?.roles?.cache.has(emojis.c) || member?.roles?.cache.has(emojis.d) || member?.roles?.cache.has(emojis.e) || member?.roles?.cache.has(emojis.g)) {
                reaction.message.reactions.resolve('🔵').users.remove(member?.id);
                reaction.message.reactions.resolve('🔴').users.remove(member?.id);
                reaction.message.reactions.resolve('🟢').users.remove(member?.id);
                reaction.message.reactions.resolve('🟠').users.remove(member?.id);
                reaction.message.reactions.resolve('🟡').users.remove(member?.id);
                reaction.message.reactions.resolve('🟣').users.remove(member?.id);
                member?.roles?.remove(emojis.a);
                member?.roles?.remove(emojis.b);
                member?.roles?.remove(emojis.c);
                member?.roles?.remove(emojis.d);
                member?.roles?.remove(emojis.e);
                member?.roles?.remove(emojis.g);
            }
        }

        if (reaction.emoji.name === '🟣') {
            roleId = emojis.g;

            if (member?.roles?.cache.has(emojis.a) || member?.roles?.cache.has(emojis.b) || member?.roles?.cache.has(emojis.c) || member?.roles?.cache.has(emojis.d) || member?.roles?.cache.has(emojis.e) || member?.roles?.cache.has(emojis.f)) {
                reaction.message.reactions.resolve('🔵').users.remove(member?.id);
                reaction.message.reactions.resolve('🔴').users.remove(member?.id);
                reaction.message.reactions.resolve('🟢').users.remove(member?.id);
                reaction.message.reactions.resolve('🟠').users.remove(member?.id);
                reaction.message.reactions.resolve('🟡').users.remove(member?.id);
                reaction.message.reactions.resolve('🌸').users.remove(member?.id);
                member?.roles?.remove(emojis.a);
                member?.roles?.remove(emojis.b);
                member?.roles?.remove(emojis.c);
                member?.roles?.remove(emojis.d);
                member?.roles?.remove(emojis.e);
                member?.roles?.remove(emojis.f);
            }
        }

        if (reaction.emoji.name === '👶') {
            roleId = emojis.h;

            if (member?.roles?.cache.has(emojis.i) || member?.roles?.cache.has(emojis.j)) {
                reaction.message.reactions.resolve('👦').users.remove(member?.id);
                reaction.message.reactions.resolve('👨').users.remove(member?.id);
                member?.roles?.remove(emojis.i);
                member?.roles?.remove(emojis.j);
            }
        }

        if (reaction.emoji.name === '👦') {
            roleId = emojis.i;

            if (member?.roles?.cache.has(emojis.h) || member?.roles?.cache.has(emojis.j)) {
                reaction.message.reactions.resolve('👶').users.remove(member?.id);
                reaction.message.reactions.resolve('👨').users.remove(member?.id);
                member?.roles?.remove(emojis.h);
                member?.roles?.remove(emojis.j);
            }
        }

        if (reaction.emoji.name === '👨') {
            roleId = emojis.j;

            if (member?.roles?.cache.has(emojis.h) || member?.roles?.cache.has(emojis.i)) {
                reaction.message.reactions.resolve('👶').users.remove(member?.id);
                reaction.message.reactions.resolve('👦').users.remove(member?.id);
                member?.roles?.remove(emojis.h);
                member?.roles?.remove(emojis.i);
            }
        }

        if (reaction.emoji.name === '1️⃣') {
            roleId = emojis.k;

            if (member?.roles?.cache.has(emojis.l) || member?.roles?.cache.has(emojis.m) || member?.roles?.cache.has(emojis.n)) {
                reaction.message.reactions.resolve('2️⃣').users.remove(member?.id);
                reaction.message.reactions.resolve('3️⃣').users.remove(member?.id);
                reaction.message.reactions.resolve('4️⃣').users.remove(member?.id);
                member?.roles?.remove(emojis.l);
                member?.roles?.remove(emojis.m);
                member?.roles?.remove(emojis.n);
            }
        }

        if (reaction.emoji.name === '2️⃣') {
            roleId = emojis.l;

            if (member?.roles?.cache.has(emojis.k) || member?.roles?.cache.has(emojis.m) || member?.roles?.cache.has(emojis.n)) {
                reaction.message.reactions.resolve('1️⃣').users.remove(member?.id);
                reaction.message.reactions.resolve('3️⃣').users.remove(member?.id);
                reaction.message.reactions.resolve('4️⃣').users.remove(member?.id);
                member?.roles?.remove(emojis.k);
                member?.roles?.remove(emojis.m);
                member?.roles?.remove(emojis.n);
            }
        }

        if (reaction.emoji.name === '3️⃣') {
            roleId = emojis.m;

            if (member?.roles?.cache.has(emojis.k) || member?.roles?.cache.has(emojis.l) || member?.roles?.cache.has(emojis.n)) {
                reaction.message.reactions.resolve('1️⃣').users.remove(member?.id);
                reaction.message.reactions.resolve('2️⃣').users.remove(member?.id);
                reaction.message.reactions.resolve('4️⃣').users.remove(member?.id);
                member?.roles?.remove(emojis.k);
                member?.roles?.remove(emojis.l);
                member?.roles?.remove(emojis.n);
            }
        }

        if (reaction.emoji.name === '4️⃣') {
            roleId = emojis.n;

            if (member?.roles?.cache.has(emojis.k) || member?.roles?.cache.has(emojis.l) || member?.roles?.cache.has(emojis.m)) {
                reaction.message.reactions.resolve('1️⃣').users.remove(member?.id);
                reaction.message.reactions.resolve('2️⃣').users.remove(member?.id);
                reaction.message.reactions.resolve('3️⃣').users.remove(member?.id);
                member?.roles?.remove(emojis.k);
                member?.roles?.remove(emojis.l);
                member?.roles?.remove(emojis.m);
            }
        }

        if (reaction.emoji.name === '🙋‍♂️') {
            roleId = emojis.o;

            if (member?.roles?.cache.has(emojis.p) || member?.roles?.cache.has(emojis.q)) {
                reaction.message.reactions.resolve('🙋‍♀️').users.remove(member?.id);
                reaction.message.reactions.resolve('🙋').users.remove(member?.id);
                member?.roles?.remove(emojis.p);
                member?.roles?.remove(emojis.q);
            }
        }

        if (reaction.emoji.name === '🙋‍♀️') {
            roleId = emojis.p;

            if (member?.roles?.cache.has(emojis.o) || member?.roles?.cache.has(emojis.q)) {
                reaction.message.reactions.resolve('🙋‍♂️').users.remove(member?.id);
                reaction.message.reactions.resolve('🙋').users.remove(member?.id);
                member?.roles?.remove(emojis.o);
                member?.roles?.remove(emojis.q);
            }
        }

        if (reaction.emoji.name === '🙋') {
            roleId = emojis.q;

            if (member?.roles?.cache.has(emojis.o) || member?.roles?.cache.has(emojis.p)) {
                reaction.message.reactions.resolve('🙋‍♂️').users.remove(member?.id);
                reaction.message.reactions.resolve('🙋‍♀️').users.remove(member?.id);
                member?.roles?.remove(emojis.o);
                member?.roles?.remove(emojis.p);
            }
        }

        const role = guild.roles.cache.find(role => role.id === roleId);

        if (reaction.message.channel.id === process.env.SELFROLE_CHAN) {
            for (const i in emojis.names) {
                if (reaction.emoji.name === emojis.names[i]) {
                    member?.roles?.add(role);
                }
            }
        } else {
            return;
        }
    }
}