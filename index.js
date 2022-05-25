const { Telegraf } = require("telegraf");

const YOUR_TOKEN = "5320649862:AAErjQk4-7S6C8PpS1W5Nq9oVrLdFevqmkI";
const bot = new Telegraf(YOUR_TOKEN);

bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));

bot.on("sticker", (ctx) => ctx.reply("🐶"));

bot.on("message", async (ctx) => {
    const message = ctx.update.message.text;
    if (message.match(/hello/)) {
        ctx.reply("Xin chào");
    } else {
        ctx.reply("Hong hiểu...");
    }
});

bot.launch();