import isVowel from './isVowel';

describe('straightforward tests of isVowel function', () => {
  test('identifies "a" as a vowel', () => {
    expect(isVowel('a')).toBe(true);
  });

  test('identifies "z" as a non-vowel', () => {
    expect(isVowel('z')).toBe(false);
  });
});

describe('using forEach to create multiple tests for many test cases', () => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const others = ['b', 'B', 'x', ' '];

  //using forEach we can generate multiple tests for multiple test cases
  vowels.forEach(vowel =>
    test(`identifies ${vowel} as vowel`, () =>
      expect(isVowel(vowel)).toBe(true))
  );

  vowels.forEach(vowel =>
    test(`identifies ${vowel} as vowel case-insensitive`, () =>
      expect(isVowel(vowel.toUpperCase())).toBe(true))
  );

  others.forEach(other =>
    test(`identifies ${other} as non-vowel`, () =>
      expect(isVowel(other)).toBe(false))
  );

  others.forEach(other =>
    test(`identifies ${other} as non-vowel case-insensitive`, () =>
      expect(isVowel(other.toUpperCase())).toBe(false))
  );
});

describe('tests can assert that an exception is expected for a test case', () => {
  // note that to expect an exception expect must be passed
  // a function that runs isVowel instead of just calling isVowel directly

  test('throws when given something not of string type', () => {
    expect(() => isVowel(9)).toThrow();
  });

  test('throws with exact message when given something not of string type', () => {
    expect(() => isVowel(9)).toThrowError(
      'isVowel only operates on characters'
    );
  });

  test('throws when given something with more than one character', () => {
    expect(() => isVowel('aa')).toThrow();
  });

  test('throws with exact message when given something more than one character', () => {
    expect(() => isVowel('aa')).toThrowError(
      'isVowel only operates on one character at a time'
    );
  });
});
