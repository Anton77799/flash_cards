const express = require('express');

const route = express.Router();

const Auth = require('../views/Auth/Auth');
const { User } = require('../../db/models');
const render = require('../lib/renderTemplate');
const bcrypt = require('bcrypt');


route.get('/', (req, res) => {
  try {
    // const name = req.session?.user?.name;
    // const isAdmin = req.session?.user?.isAdmin;
    render(Auth, {}, res);
  } catch (error) {
    console.log(error)
  }
});

route.post('/signup', async (req, res) => {
  const { login, password } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, 5)
    const newUser = await User.create({ login, password: hashPass });
    console.log("26", newUser);
    console.log("27", newUser.id);
    console.log("28", newUser.login);
    req.session.newUser = { id: newUser.id, login: newUser.login } // create cookie and write to DB session storage
    res.redirect('/')
  } catch (err) {
    console.log('Create user error', err.message);
  }
});

route.get('/signout', (req, res, next) => {
  req.session.destroy((err) => {
    if(err) return res.send(err.message)
    res.clearCookie('sid')
    res.redirect('/')
  })
  });

  route.post("/signin", async (req, res, next) => {
    const { login, password } = req.body;
    const newUser = await User.findOne({ where: { login: login } });
    if (newUser) {
      const isValidPassword = await bcrypt.compare(password, newUser.password);
      if (isValidPassword) {
        req.session.newUser = { id: newUser.id, login: newUser.login }; // create cookie and write to DB session storage
        res.redirect("/");
      }
      //render(SigninErr, {}, res);
    } else {
      //render(SigninErr, {}, res);
    }
  });

module.exports = route;