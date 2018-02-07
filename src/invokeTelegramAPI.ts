import { ClientRequest } from 'http';
import * as https from 'https';
import * as querystring from 'querystring';

export const invokeTelegramAPI = (method: string, parameters?: {}): void => {
    const payload: string = querystring.stringify(parameters);
    const request: ClientRequest = https.request({
        method: 'POST',
        hostname: 'api.telegram.org',
        path: `/bot${process.env.BOT_ACCESS_TOKEN}/${method}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(payload),
            'Connection': 'close'
        }
    });
    parameters && request.write(payload);
    request.end();
};
