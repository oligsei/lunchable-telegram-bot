import { Callback, Context, Handler } from 'aws-lambda';
import { getLunchPlaceOfTheDay } from './support/getLunchPlaceOfTheDay';
import { invokeTelegramAPI } from './support/invokeTelegramAPI';
import { isLunchQuestion } from './support/isLunchQuestion';
import { Telegram } from './telegram';

export const handler: Handler = (payload: Telegram.Update, context: Context, callback?: Callback) => {
    if (callback === undefined) {
        throw new Error('No callback! Why, lambda, WHYY??');
    }

    if (!payload.message) {
        console.error('No message found');
        return callback();
    }

    const { from, chat } = payload.message;

    if (from === undefined || from.is_bot) {
        console.error('Message is from a bot');
        return callback();
    }

    if (payload.message.text && isLunchQuestion(payload.message.text)) {
        invokeTelegramAPI('sendMessage', {
            chat_id: chat.id,
            text: getLunchPlaceOfTheDay(new Date())
        });
    }
    return callback();
};
