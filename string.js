function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    throw new Error ('No match amount of characters');
  } else {
    return string.length;
  }
}

module.exports = stringLength;