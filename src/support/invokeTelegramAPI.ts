import { ClientRequest } from 'http';
import * as https from 'https';
import * as querystring from 'querystring';

export const invokeTelegramAPI = <T = void>(method: string, parameters?: {}): Promise<T> => {
    return new Promise<T>((resolve) => {
        const payload: string = querystring.stringify(parameters);
        const request: ClientRequest = https.request(
            {
                method: 'POST',
                hostname: 'api.telegram.org',
                path: `/bot${process.env.BOT_ACCESS_TOKEN}/${method}`,
                headers: {
                    'Connection': 'close',
                    'Content-Length': Buffer.byteLength(payload),
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            },
            () => resolve()
        );
        parameters && request.write(payload);
        request.end();
    });
};
