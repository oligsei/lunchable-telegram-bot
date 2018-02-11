import { ClientRequest } from 'http';
import * as https from 'https';
import * as querystring from 'querystring';

export const invokeTelegramAPI = <T = void>(method: string, parameters?: {}): Promise<T> => {
    const payload: string = querystring.stringify(parameters);
    const options: https.RequestOptions = {
        method: 'POST',
        hostname: 'api.telegram.org',
        path: `/bot${process.env.BOT_ACCESS_TOKEN}/${method}`,
        headers: {
            'Connection': 'close',
            'Content-Length': Buffer.byteLength(payload),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    return new Promise<T>((resolve) => {
        const request: ClientRequest = https.request(options, () => resolve());
        parameters && request.write(payload);
        request.end();
    });
};
