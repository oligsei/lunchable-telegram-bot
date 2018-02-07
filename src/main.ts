import { Callback, Context, Handler } from 'aws-lambda';
import { ClientRequest } from 'http';
import * as https from 'https';
import * as querystring from 'querystring';

const TELEGRAM_API_HOST: string = 'api.telegram.org';
const TELEGRAM_API_PATH: string = `/bot${process.env.BOT_ACCESS_TOKEN}`;

export const handler: Handler = (event: any, context: Context, callback?: Callback) => {
    try {
        const response: { chat_id: number; text: string } = {
            chat_id: event.message.chat.id,
            text: JSON.stringify(event)
        };

        const request: ClientRequest = https.request({
            method: 'POST',
            hostname: TELEGRAM_API_HOST,
            path: `${TELEGRAM_API_PATH}/sendMessage`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Connection': 'close'
            }
        });
        request.write(querystring.stringify(response));
        request.end();

        callback && callback();
    } catch (e) {
        callback && callback(e);
    }
};
