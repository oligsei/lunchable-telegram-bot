import { ClientRequest } from 'http';
import { request, RequestOptions } from 'https';
import { stringify } from 'querystring';

const { BOT_ACCESS_TOKEN } = process.env;

export const invokeTelegramAPI = <T = void>(method: string, parameters?: {}) => {
    const payload = stringify(parameters);
    const options: RequestOptions = {
        method: 'POST',
        hostname: 'api.telegram.org',
        path: `/bot${BOT_ACCESS_TOKEN}/${method}`,
        headers: {
            'Connection': 'close',
            'Content-Length': Buffer.byteLength(payload),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    return new Promise<T>(resolve => {
        const clientRequest: ClientRequest = request(options, () => resolve());
        parameters && clientRequest.write(payload);
        clientRequest.end();
    });
};
