const statusCounter = require('../../modules/misc/activity_update');
const spotlightCheck = require('../../modules/timers/spotlight_check');
const bumpCheck = require('../../modules/timers/bump_check');
const featuredCheck = require('../../modules/timers/featured_check');
const mutesCheck = require('../../modules/misc/mutes_check');
const databaseCleanup = require('../../modules/timers/cronjobs');
const liveNow = require('../../modules/misc/live_now');
const youtubeAuto = require('../../modules/misc/youtubeauto');
const fetchTweets = require('../../modules/misc/fetch_tweets');
const welcomeCheck = require('../../modules/misc/welcome_check');
const storeCheck = require('../../modules/store/store_check');
const leaderboardUpdate = require('../../modules/misc/leaderboard_update');
const cronjob = require('cron').CronJob;
const { dbOne } = require('../../mongo');
const fs = require('fs');
const Canvas = require("canvas");
const path = require('path');

module.exports = {
    name: 'ready',
    once: true,
    async execute(message, client, Discord) {
        console.log('Client is online!');
        console.timeEnd('Time to online');

        // Connect to database
        dbOne.then(() => console.log('Connected to database')).catch(err => console.error(`${path.basename(__filename)} There was a problem connecting to the database: `, err));

        // Register the font we use for the /rank command
        Canvas.registerFont("./res/fonts/ulm_grotesk.ttf", { family: "grotesk" });
        Canvas.registerFont("./res/fonts/redhatdisplay_black.otf", { family: "redhatdisplay" });

        // Booster rewards
        const img = './res/images/supporter_rewards.png';
        const boostTimer = new cronjob('0 */10 * * *', function () {
            client.channels.cache.get(process.env.GENERAL_CHAN)
                .send({
                    content: `Consider becoming a server booster to get access to these cool server perks`,
                    files: [img]
                }).catch(err => console.error(`${path.basename(__filename)} There was a problem sending a message: `, err))
                .then(msg => {
                    setTimeout(() => {
                        msg.delete().catch(err => console.error(`${path.basename(__filename)} There was a problem deleting a message: `, err));
                    }, 900000);
                });
        });
        boostTimer.start();

        // Delete txt2img files from the temp folder
        fs.readdir('./res/temp', (err, files) => {
            if (err) return;
            for (const file of files) {
                if (file.endsWith('.png')) {
                    fs.unlink(`./res/temp/${file}`, (err) => {
                        if (err) console.error('There was a problem deleting a txt2img file: ', err);
                    });
                }
            }
        });

        // Misc intervals
        mutesCheck(message, client, Discord);
        statusCounter(client);
        spotlightCheck(client);
        bumpCheck(message, client, Discord);
        featuredCheck(client);
        databaseCleanup(client);
        liveNow(client);
        youtubeAuto(client);
        fetchTweets(client);
        welcomeCheck(client);
        storeCheck(client);
        leaderboardUpdate(client);
    }
};