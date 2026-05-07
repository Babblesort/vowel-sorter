import isConsonant from './isConsonant';

describe('straightforward tests of isConsonant function', () => {
  test('identifies "b" as a consonant', () => {
    expect(isConsonant('b')).toBe(true);
  });

  test('identifies "a" as a non-consonant', () => {
    expect(isConsonant('a')).toBe(false);
  });
});

describe('using forEach to create multiple tests for many test cases', () => {
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
  const others = ['a', 'e', 'i', 'o', 'u', 'y', ' '];

  //using forEach we can generate multiple tests for multiple test cases
  consonants.forEach(consonant =>
    test(`identifies ${consonant} as consonant`, () =>
      expect(isConsonant(consonant)).toBe(true))
  );

  consonants.forEach(consonant =>
    test(`identifies ${consonant} as consonant case-insensitive`, () =>
      expect(isConsonant(consonant.toUpperCase())).toBe(true))
  );

  others.forEach(other =>
    test(`identifies ${other} as non-consonant`, () =>
      expect(isConsonant(other)).toBe(false))
  );

  others.forEach(other =>
    test(`identifies ${other} as non-consonant case-insensitive`, () =>
      expect(isConsonant(other.toUpperCase())).toBe(false))
  );
});

describe('tests can assert that an exception is expected for a test case', () => {
  // note that to expect an exception expect must be passed
  // a function that runs isConsonant instead of just calling isConsonant directly

  test('throws when given something not of string type', () => {
    expect(() => isConsonant(9)).toThrow();
  });

  test('throws with exact message when given something not of string type', () => {
    expect(() => isConsonant(9)).toThrowError(
      'isConsonant only operates on characters'
    );
  });

  test('throws when given something with more than one character', () => {
    expect(() => isConsonant('aa')).toThrow();
  });

  test('throws with exact message when given something more than one character', () => {
    expect(() => isConsonant('aa')).toThrowError(
      'isConsonant only operates on one character at a time'
    );
  });
});

