import { APIGatewayEvent, Context, ProxyCallback, ProxyHandler } from 'aws-lambda';
import { invokeTelegramAPI } from './invokeTelegramAPI';
import { Telegram } from './telegram';

export const handler: ProxyHandler = (event: APIGatewayEvent, context: Context, callback?: ProxyCallback) => {
    if (callback === undefined) {
        throw new Error('No callback! Why, lambda, WHYY??');
    }

    if (event.body === null) {
        return callback(new Error('No body'));
    }

    const payload: Telegram.Update = JSON.parse(event.body);

    if (!payload.message) {
        return callback(new Error('No message found'));
    }

    const {from, chat} = payload.message;

    if (from === undefined || from.is_bot) {
        return callback(new Error('Message is from a bot'));
    }

    // respond only to real users
    invokeTelegramAPI('sendMessage', {
        chat_id: chat.id,
        text: JSON.stringify(payload)
    });

    return callback();
};
