import { getLunchPlaceOfTheDay } from '../../src/support/getLunchPlaceOfTheDay';

describe('getLunchPlaceOfTheDay', () => {
    test('should return a constant value', () => {
        expect(getLunchPlaceOfTheDay(new Date())).toBe('Лол-кек столовка');
    });
});
