import { Callback, Context, Handler } from 'aws-lambda';
import { quotes } from './quotes';
import { formatQuote } from './support/formatQuote';
import { getRandomQuote } from './support/getRandomQuote';
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

    const { from } = payload.message;

    if (from === undefined || from.is_bot) {
        console.error('Message is from a bot');
        return callback();
    }

    const { text, chat: { id: chat_id } } = payload.message;

    if (text && isLunchQuestion(text)) {
        invokeTelegramAPI('sendMessage', {
            chat_id,
            text: formatQuote(getRandomQuote(quotes)),
            parse_mode: 'Markdown'
        });
    }

    return callback();
};
