import { Quote } from '../quotes';

export const formatQuote = ({ quote, author }: Quote) => {
    return `\`${quote}\`\n— _${author}_`;
};
