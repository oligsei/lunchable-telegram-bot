import { Callback, Context, Handler } from 'aws-lambda';
import { invokeTelegramAPI } from './invokeTelegramAPI';
import { Telegram } from './telegram';

export const handler: Handler = (event: any, context: Context, callback?: Callback) => {
    const payload: Telegram.Update = JSON.parse(event.body);

    if (!payload.message) {
        return callback && callback(new Error('No message found'));
    }

    const {from, chat} = payload.message;

    if (!from || from.is_bot) {
        return callback && callback(new Error('Message is from a bot'));
    }

    // respond only to real users
    invokeTelegramAPI('sendMessage', {
        chat_id: chat.id,
        text: JSON.stringify(event)
    });

    callback && callback();
};
