require(`dotenv`).config()

const {Bot,GrammyError,HttpError,InlineKeyboard} = require(`grammy`)

const bot = new Bot(process.env.BOT_API_KEY);

bot.api.setMyCommands([
    {
        command:`start`,description:`Запуск бота`
    },
    {
        command: `hello`,description:`Приветствие`
    },
    {
        command: `menu`,description:`что вы предпочитаете`
    }
])


bot.command(`menu`, async (ctx)=>{
    const inlineKeyboard = new InlineKeyboard()
    .text(`Комедии 🤣`,`button-1`)
    .text(`Ужасы 👻`,`button-2`)
    .text(`Боевики 💥`,`button-3`).row()
    .text(`Триллеры 🔪`,`button-4`)
    .text(`Сериалы 🎬`,`button-5`)
    .text(`Милодраммы 💔`,`button-6`).row()
    .text(`Драмма 😢`,`button-7`)
    await ctx.reply(`Выбирите жанр ! для просмотра фильмов`,{
        reply_markup: inlineKeyboard ,
    })
})

bot.callbackQuery(`button-1`, async(ctx)=>{
    await ctx.answerCallbackQuery()
   await ctx.reply(`Вы можете посмотреть здесь кино по вашему вкусу. приятного просмотра !<a href="https://moekinox.xyz/movies/komediya/">Комедии 🤣</a>`,{
    parse_mode:`HTML`
    })
})


bot.callbackQuery(`button-2`, async(ctx)=>{
    await ctx.answerCallbackQuery()
   await ctx.reply(`Вы можете посмотреть здесь кино по вашему вкусу. приятного просмотра ! <a href="https://main.lordfilm10.black/uzhasy/">Ужасы 👻</a>`,{
    parse_mode:`HTML`
    })
})

bot.callbackQuery(`button-3`, async(ctx)=>{
    await ctx.answerCallbackQuery()
   await ctx.reply(`Вы можете посмотреть здесь кино по вашему вкусу. приятного просмотра ! <a href="https://moekinox.xyz/movies/boevik/">Боевики 💥</a>`,{
    parse_mode:`HTML`
    })
})


bot.callbackQuery(`button-4`, async(ctx)=>{
    await ctx.answerCallbackQuery()
   await ctx.reply(`Вы можете посмотреть здесь кино по вашему вкусу. приятного просмотра ! <a href="https://kinogo-films.biz/trillery/">Триллеры 🔪</a>`,{
    parse_mode:`HTML`
    })
})


bot.callbackQuery(`button-5`, async(ctx)=>{
    await ctx.answerCallbackQuery()
   await ctx.reply(`Вы можете посмотреть здесь сериалы по вашему вкусу. приятного просмотра ! <a href="https://lordserial.run/zarubezhnye-serialy/page/2/">Сериалы 🎬</a>`,{
    parse_mode:`HTML`
    })
})


bot.callbackQuery(`button-6`, async(ctx)=>{
    await ctx.answerCallbackQuery()
   await ctx.reply(`Вы можете посмотреть здесь кино по вашему вкусу. приятного просмотра ! <a href="https://kinogo.fm/melodrama/">Милодраммы💔</a>`,{
    parse_mode:`HTML`
    })
})


bot.callbackQuery(`button-7`, async(ctx)=>{
    await ctx.answerCallbackQuery()
   await ctx.reply(`Вы можете посмотреть здесь кино по вашему вкусу. приятного просмотра !<a href="https://kinogo.fm/dramy/">Драмма 😢</a>`,{
    parse_mode:`HTML`
    })
})



bot.command(`hello`, async (ctx)=>{
    await ctx.reply(`Приветсвую вас в нашем сообшестве КиноДоза🎬🍿!!!`)
})

bot.command(`start`, async (ctx)=>{
    await ctx.reply(`Привет я бот !!! подписывайся на наш канал и будь в курсе новинок кино с <a href="https://t.me/KinoDozzz">КиноДоза🎬🍿</a> 
    
Для просмотра кино нажмите в меню /menu и вы перейдете в раздел просмотра новинок кино по вашему вкусу.Приятного просмотра!
    `,{
        parse_mode:`HTML`
    })
})




bot.on(`message`, async (ctx)=>{
    await ctx.reply(`Выбирите в миню /menu для выбора жанров кино и просмотра фильмов приятного просмотра !!!`)
})

bot.catch((err)=>{
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}`);
    const e = err.error;

    if (e instanceof GrammyError){
        console.error("Error in request:",e.description)
    } else if (e instanceof HttpError){
        console.error("Could not contact Telegram:",e)
    } else {
        console.error("Uknown error:",e)
    }
})

bot.start()