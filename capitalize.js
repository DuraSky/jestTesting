function capitalize(string) {
    const first = string.slice(0,1).toUpperCase();
    const rest = string.slice(1, string.length);
    return first+rest;
  }
  module.exports = capitalize;