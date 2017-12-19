const swag = require(`${__dirname}/models/swag`);
const users = require(`${__dirname}/models/users`);
let id = 1;

module.exports = {
  login: (req, res, next) => {
    const { session } = req;
    const { username, password } = req.body;
    const user = user.find(
      user => user.username === username && user.password === password
    );
    if (user) {
      session.user.username = user.username;
      res.status(200).send(session.user);
    } else {
      res.status(500).send("Not Authorized.");
    }
  },
  register: (req, res, next) => {
    const { session } = req;
    const { username, password } = req.body;
    user.push({ id, username, password });
    id++;
    session.user.username = username;
    res.status(200).send(session.user);
  },
  signout: (req, res, next) => {
    const { session } = req;
    session.destroy();
    res.status(200).send(req.session);
  },
  getUser: (req, res, next) => {
    const { session } = req;
    res.status(200).send(session.user);
  }
};