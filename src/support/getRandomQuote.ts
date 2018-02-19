import { quotes } from '../quotes';

export const getRandomQuote = (): { author: string; quote: string } => {
    return quotes[Math.floor(Math.random() * quotes.length)];
};
