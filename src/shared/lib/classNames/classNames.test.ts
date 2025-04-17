import { classNames } from "./classNames";

describe('classNames', () => {
    test('test with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('test with additional params', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });
    test('test with all true mods', () => {
        const expected = 'someClass class1 class2 mod1 mod2'
        expect(classNames('someClass', {'mod1': true, 'mod2': true}, ['class1', 'class2']))
        .toBe(expected);
    });
    test('test with one false mods', () => {
        const expected = 'someClass class1 class2 mod1'
        expect(classNames('someClass', {'mod1': true, 'mod2': false}, ['class1', 'class2']))
        .toBe(expected);
    });
    test('test with undefined mods', () => {
        const expected = 'someClass class1 class2 mod1'
        expect(classNames('someClass', {'mod1': true, 'mod2': undefined}, ['class1', 'class2']))
        .toBe(expected);
    });
})