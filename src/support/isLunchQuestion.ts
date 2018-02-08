export const isLunchQuestion = (message: string): boolean => {
    return /.*(обед).*\?/gi.test(message);
};
