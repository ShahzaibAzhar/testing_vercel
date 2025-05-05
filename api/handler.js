// api/handler.js or same index.js
const app = require('./index');

module.exports = (req, res) => {
  return app(req, res);
};
