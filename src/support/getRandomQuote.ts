import { Quote } from '../quotes';

export const getRandomQuote = (quotes: Quote[]) => {
    return quotes[Math.floor(Math.random() * quotes.length)];
};
