require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const path = require('path');
const {
  sequelize, Desk, Question, Result,
} = require('../db/models');
const renderTemplate = require('./lib/renderTemplate');
const Home = require('./views/Home');
const Lk = require('./views/Lk');
const Questions = require('./views/Question');

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRouter = require('./routes/auth');

// Выносим порт в .env и на всякий случай подставляем дефолтный через ||
const PORT = process.env.PORT || 3000;

app.get('/1', async (req, res) => {
  try {
    const readBD = await Question.findAll({ where: { desk_id: 1 }, raw: true });
    console.log(readBD);
    renderTemplate(Questions, { readBD }, res);
  // console.log(readBD);
  } catch (error) {
    console.log(error, 'Error');
  }
});
app.get('/2', async (req, res) => {
  try {
    const readBD = await Question.findAll({ where: { desk_id: 2 }, raw: true });
    console.log(readBD);
    renderTemplate(Questions, { readBD }, res);
  // console.log(readBD);
  } catch (error) {
    console.log(error, 'Error');
  }
});
app.get('/3', async (req, res) => {
  try {
    const readBD = await Question.findAll({ where: { desk_id: 3 }, raw: true });
    console.log(readBD);
    renderTemplate(Questions, { readBD }, res);
  // console.log(readBD);
  } catch (error) {
    console.log(error, 'Error');
  }
});
app.get('/4', async (req, res) => {
  try {
    const readBD = await Question.findAll({ where: { desk_id: 4 }, raw: true });
    console.log(readBD);
    renderTemplate(Questions, { readBD }, res);
  // console.log(readBD);
  } catch (error) {
    console.log(error, 'Error');
  }
});

app.post('/question/:id', async (req, res) => {
  const { id, answer } = req.body;
  const onlyQ = await Question.findOne({ where: { id }, raw: true });
  if (onlyQ.answer === answer) {
    res.json({ answer: 'true' });
  } else {
    res.json({ answer: 'false' });
  }
});

const sessionConfig = {
  name: 'sid', // название куки
  store: new FileStore({}), // подключаем БД для храненя куков
  secret: process.env.COOKIE_SECRET, // ключ для шифрования cookies //node====>>> require('crypto').randomBytes(10).toString('hex')
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 10,
  },
};

app.use(session(sessionConfig));
app.get('/', async (req, res) => {
  try {
    const username = req.session?.newUser?.login;
    const readDB = await Desk.findAll({ raw: true });
    renderTemplate(Home, { username, readDB }, res);
  } catch (error) {
    console.log(error);
  }
});

app.get('/lk', async (req, res) => {
  try {
    const username = req.session?.newUser?.login;
    // await Result.create({
    //   user_id: 1, desk_id: 1, score: 200, question_boolian: true,
    // });
    const stat = await Result.findAll({ raw: true });
    console.log(stat);
    renderTemplate(Lk, { username, stat }, res);
  } catch (err) {
    console.log(err);
  }
});

app.use('/auth', authRouter);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
