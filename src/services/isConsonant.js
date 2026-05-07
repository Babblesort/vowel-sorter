const consonantRegex = /[bcdfghjklmnpqrstvwxz]/i;

const isConsonant = letter => {
  if (typeof letter !== 'string') {
    throw Error('isConsonant only operates on characters');
  }

  if (letter.length !== 1) {
    throw Error('isConsonant only operates on one character at a time');
  }

  return consonantRegex.test(letter);
};

export default isConsonant;

