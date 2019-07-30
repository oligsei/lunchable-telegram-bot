export const parseLunchOrder = (originalMessage: string) => {
    return originalMessage
        .toLowerCase()
        .split(/[,+\n]/gm)
        .map(orderItem => {
            const message = orderItem.trim();
            const half = /(1\/2|половина|половинка)/mg;

            if (half.test(message)) {
                return {
                    menuItem: message.replace(half, '').trim(),
                    halfPortion: true
                };
            }

            const full = /(целый|целая|полный)/mg;
            return {
                menuItem: message.replace(full, '').trim(),
                halfPortion: false
            };
        });
};
