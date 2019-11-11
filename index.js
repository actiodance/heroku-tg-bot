const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '816093711:AAFoFKNusgiVWOQgGPppo56Ir4583fJjLBo'

const bot = new TelegramBot(TOKEN, {pollingz; true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Привет от HEROKU, бот говорит: "привет, ${msg.from.first_name}"')
})