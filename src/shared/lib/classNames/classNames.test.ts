import { classNames } from './classNames';

describe('classNames', () => {
    // Test when only the base class is provided.
    test('with only the base class', () => {
        const result = classNames('someClass');
        const expected = 'someClass';
        expect(result).toBe(expected);
    });

    // Test when additional classes are provided along with the base class.
    test('with additional classes', () => {
        const result = classNames('someClass', {}, ['class1', 'class2']);
        const expected = 'someClass class1 class2';
        expect(result).toBe(expected);
    });

    // Test when modifiers (mods) are provided along with the base class and additional classes.
    test('with modifiers (mods)', () => {
        const result = classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        );
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(result).toBe(expected);
    });

    // Test when some modifiers are set to 'false' while others are 'true'.
    test('with some modifiers set to false', () => {
        const result = classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        );
        const expected = 'someClass class1 class2 hovered';
        expect(result).toBe(expected);
    });

    // Test when some modifiers are set to 'undefined'.
    test('with some modifiers set to undefined', () => {
        const result = classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        );
        const expected = 'someClass class1 class2 hovered';
        expect(result).toBe(expected);
    });
});
