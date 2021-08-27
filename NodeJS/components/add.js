const add = (...numbers) => {
  return numbers.reduce((sum, val) => {
    return sum + val;
  }, 0);
};

module.exports = add;
