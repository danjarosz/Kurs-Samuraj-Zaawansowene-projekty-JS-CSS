const multiply = (...numbers) => {
  if (!numbers.length) {
    return 0;
  }

  return numbers.reduce((prev, current, index) => {
    if (index === 0) {
      return current;
    } else {
      return prev * current;
    }
  }, 0);
};

module.exports = {
  multiply,
  desctiption: "Some description",
};
