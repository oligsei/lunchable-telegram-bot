import { Callback, Context, Handler } from 'aws-lambda';
import { invokeTelegramAPI } from './invokeTelegramAPI';

export const handler: Handler = (event: any, context: Context, callback?: Callback) => {
    try {
        invokeTelegramAPI('sendMessage', {
            chat_id: event.message.chat.id,
            text: JSON.stringify(event)
        });
        callback && callback();
    } catch (e) {
        callback && callback(e);
    }
};
