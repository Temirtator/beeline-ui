module.exports = function removeSpace(string) {
    if (typeof string !== "string") throw new TypeError("Function wants a string!");
    return string.replace(/\s/g, "");
};
  