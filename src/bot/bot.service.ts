import { Component, OnModuleInit, OnModuleDestroy } from '@nestjs/common';

@Component()
export class BotService implements OnModuleInit {

    onModuleInit() {
        this.botMessage();
    }

    botMessage() {        
        process.env.NTBA_FIX_319 = "1";
        const TelegramBot = require('node-telegram-bot-api');
        
        const token = 'YOUR_TELEGRAM_TOKEN';
        
        const bot = new TelegramBot(token, { polling: true });
        
    
        bot.on('message', (msg) => {
            let Hi = "hi";
            if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
                bot.sendMessage(msg.from.id, "Hello " + msg.from.first_name + " what would you like to know about me ?");
            }
            
            let response = "Who are you";
            if (msg.text.toString().toLowerCase().includes("who")) {
                bot.sendMessage(msg.chat.id, "I am an intelligent robot, built with Nest.js. Thanks for asking");
            }
            
            let response2 = "Do you love JavaScript";
            if (msg.text.toString().toLowerCase().includes("javascript")) {
                bot.sendMessage(msg.from.id, "Oh, did I hear you say JavaScript? \n I was built with TypeScript, but still compatible with pure JavaScript")
            }
        });
        
    }
}