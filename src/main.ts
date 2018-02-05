import { Callback, Context, Handler } from 'aws-lambda';

export const handler: Handler = (event: any, context: Context, callback?: Callback) => {

    console.log('main.ts:', event, context, callback);

    callback && callback(null, 'Hello world!');
};
