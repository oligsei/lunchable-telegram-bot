export const formatQuote = ({ quote, author }: { author: string; quote: string }): string => {
    return `\`${quote}\`\n— _${author}_`;
};
