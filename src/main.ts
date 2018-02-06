import { Callback, Context, Handler } from 'aws-lambda';
import { ClientRequest } from 'http';
import * as https from 'https';
import * as querystring from 'querystring';

const TELEGRAM_API: string = `api.telegram.org/bot${process.env.BOT_ACCESS_TOKEN}`;

export const handler: Handler = (event: any, context: Context, callback?: Callback) => {
    const chatId: any = JSON.parse(event.body).message.chat.id;

    console.log('main.ts:', event, context, callback);

    const request: ClientRequest = https.request({
        method: 'POST',
        hostname: `${TELEGRAM_API}/sendMessage`
    }, () => {
        callback && callback(null, 'Hello world!');
    });

    request.write(querystring.stringify({
        chatId,
        text: 'Hello world'
    }));

    //bot.sendMessage(chatId, JSON.stringify(event));

    //callback && callback(null, 'Hello world!');
};
