import { getPluralWord } from './stringHelper';

test('getPluralWord()', () => {
    expect(getPluralWord('месяц', 2, '', 'а', 'ев')).toBe('месяца');
    expect(getPluralWord('месяц', 4, '', 'а', 'ев')).toBe('месяца');
    expect(getPluralWord('месяц', 5, '', 'а', 'ев')).toBe('месяцев');
    expect(getPluralWord('месяц', 1, '', 'а', 'ев')).toBe('месяц');
    expect(getPluralWord('месяц', 55, '', 'а', 'ев')).toBe('месяцев');
    expect(getPluralWord('месяц', 0, '', 'а', 'ев')).toBe('месяцев');
});
