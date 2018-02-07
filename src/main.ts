import { Callback, Context, Handler } from 'aws-lambda';
import { invokeTelegramAPI } from './invokeTelegramAPI';
import { Telegram } from './telegram';

export const handler: Handler = (payload: Telegram.Update, context: Context, callback?: Callback) => {
    if (callback === undefined) {
        throw new Error('No callback! Why, lambda, WHYY??');
    }

    if (!payload.message) {
        console.error('No message found');
        return callback();
    }

    const {from, chat} = payload.message;

    if (from === undefined || from.is_bot) {
        console.error('Message is from a bot');
        return callback();
    }

    // respond only to real users
    invokeTelegramAPI('sendMessage', {
        chat_id: chat.id,
        text: JSON.stringify(payload)
    });

    return callback();
};
