import { ClientRequest } from 'http';
import * as https from 'https';
import * as querystring from 'querystring';

export const invokeTelegramAPI = (method: string, payload?: {}): void => {
    const request: ClientRequest = https.request({
        method: 'POST',
        hostname: 'api.telegram.org',
        path: `/bot${process.env.BOT_ACCESS_TOKEN}/${method}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Connection': 'close'
        }
    });
    payload && request.write(querystring.stringify(payload));
    request.end();
};
