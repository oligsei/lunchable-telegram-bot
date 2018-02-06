import { Callback, Context, Handler } from 'aws-lambda';
import * as Telebot from 'telebot';

const bot: Telebot = new Telebot({
    token: process.env.BOT_ACCESS_TOKEN || ''
});

export const handler: Handler = (event: any, context: Context, callback?: Callback) => {
    const chatId: any = JSON.parse(event.body).message.chat.id;

    console.log('main.ts:', event, context, callback);

    bot.sendMessage(chatId, JSON.stringify(event));

    callback && callback(null, 'Hello world!');
};
