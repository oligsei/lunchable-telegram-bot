import { parseLunchOrder } from '../../src/support/parseLunchOrder';

describe('parseLunchOrder', () => {
    test(`should properly parse`, () => {
        const parsed = parseLunchOrder('Шницель полный, овощи + просто капуста, горчичный соус');
        expect(parsed).toEqual([
            { menuItem: 'шницель', halfPortion: false },
            { menuItem: 'овощи', halfPortion: false },
            { menuItem: 'просто капуста', halfPortion: false },
            { menuItem: 'горчичный соус', halfPortion: false }
        ]);
    });
    test(`should properly parse`, () => {
        const parsed = parseLunchOrder('шницель + 1/2 гречка + горчичный соус + свекла');
        expect(parsed).toEqual([
            { menuItem: 'шницель', halfPortion: false },
            { menuItem: 'гречка', halfPortion: true },
            { menuItem: 'горчичный соус', halfPortion: false },
            { menuItem: 'свекла', halfPortion: false }
        ]);
    });
    test(`should properly parse`, () => {
        const parsed = parseLunchOrder('1/2 гречка + молотое мясо + свекла');
        expect(parsed).toEqual([
            { menuItem: 'гречка', halfPortion: true },
            { menuItem: 'молотое мясо', halfPortion: false },
            { menuItem: 'свекла', halfPortion: false }
        ]);
    });
    test(`should properly parse`, () => {
        const parsed = parseLunchOrder('Плов целый, красный соус, свекла');
        expect(parsed).toEqual([
            { menuItem: 'плов', halfPortion: false },
            { menuItem: 'красный соус', halfPortion: false },
            { menuItem: 'свекла', halfPortion: false }
        ]);
    });
    test(`should properly parse`, () => {
        const parsed = parseLunchOrder('1/2 шницеля\n1/2 пюре\nГорчичный соус');
        expect(parsed).toEqual([
            { menuItem: 'шницеля', halfPortion: true },
            { menuItem: 'пюре', halfPortion: true },
            { menuItem: 'горчичный соус', halfPortion: false }
        ]);
    });
    test(`should properly parse`, () => {
        const parsed = parseLunchOrder('Плов целый, красный соус, свекла');
        expect(parsed).toEqual([
            { menuItem: 'плов', halfPortion: false },
            { menuItem: 'красный соус', halfPortion: false },
            { menuItem: 'свекла', halfPortion: false }
        ]);
    });
    test(`should properly parse`, () => {
        const parsed = parseLunchOrder('шницель ЦЕЛЫЙ + гречка ПОЛОВИНА + горчичный соус + капуста');
        expect(parsed).toEqual([
            { menuItem: 'шницель', halfPortion: false },
            { menuItem: 'гречка', halfPortion: true },
            { menuItem: 'горчичный соус', halfPortion: false },
            { menuItem: 'капуста', halfPortion: false }
        ]);
    });
});
