import { isLunchQuestion } from '../../src/support/isLunchQuestion';

const SHOULD_REACT_TO: string[] = [
    'Обед?',
    'Что с обедом?',
    'Что с обедом сегодня ?',
    'что с обедом, господа? сс ',
    'куда на обед?',
    'Ребят, так что сегодня с обедом?',
    'На обед сегодня едем?',
    'обед по расписанию? куда что как?'
];
const SHOULD_NOT_REACT_TO: string[] = [
    'Г?',
    'Надо ехать',
    'Ну вы где?',
    'У меня митинг ',
    'Обеду быть !'
];

/*
negatives:
Он сказал что не будет обедать?
Обед блинами?
Vadims , Ruslan что у вас с обедом ?
 */

describe('isLunchQuestion', () => {
    for (const trigger of SHOULD_REACT_TO) {
        test(`should react to ${trigger}`, () => {
            expect(isLunchQuestion(trigger)).toBe(true);
        });
    }

    for (const trigger of SHOULD_NOT_REACT_TO) {
        test(`should not react to ${trigger}`, () => {
            expect(isLunchQuestion(trigger)).toBe(false);
        });
    }
});
