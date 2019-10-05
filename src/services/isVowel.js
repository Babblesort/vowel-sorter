const vowelRegex = /[aeiouy]/i;

const isVowel = letter => {
  if (typeof letter !== 'string') {
    throw Error('isVowel only operates on characters');
  }

  if (letter.length !== 1) {
    throw Error('isVowel only operates on one character at a time');
  }

  return vowelRegex.test(letter);
};

export default isVowel;
