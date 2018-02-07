import { Callback, Context, Handler } from 'aws-lambda';
import { invokeTelegramAPI } from './invokeTelegramAPI';

export const handler: Handler = (event: any, context: Context, callback?: Callback) => {
    try {
        const payload: any = JSON.parse(event.body);

        invokeTelegramAPI('sendMessage', {
            chat_id: payload.message.chat.id,
            text: JSON.stringify(event)
        });
        callback && callback();
    } catch (e) {
        callback && callback(e);
    }
};
