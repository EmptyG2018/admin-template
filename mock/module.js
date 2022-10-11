const Error = require("./error");
const System = require("./System");
const User = require("./user");

module.exports = {
  ...Error,
  ...System,
  ...User
}
