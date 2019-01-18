const express = require('express'),
  sassMiddleware = require('node-sass-middleware'),
  app = express(),
  content = require('./content/content'),
  path = require('path');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 7777;
}
const router = express.Router();
const db = require('../back/db.json');

const buildRandomString = require('../back/utils/generator');

app.set('view engine', 'pug');

// SASS
app.use(sassMiddleware({
  src: __dirname,
  dest: path.join(__dirname, 'public'),
  debug: false,
  outputStyle: 'compressed'
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(__dirname + '/public/js'));

app.set('views', path.join(__dirname, 'views'));

// ROUTING
app.get('/', (req, res) => {
  res.render('index', content.index);
});

app.get('/docs', (req, res) => {
  res.render('docs', content.docs)
});

app.get('/about', (req, res) => {
  res.render('about', content.about)
});

app.get('/', (req, res) => {
  res.render({
    scripts: ['../back/utils/generator.js']
  })
});

// API ROUTING

// ROUTING

router.get('/eggs', (req, res, next) => {
  res.json(db.foods.eggs);
});
router.get('/milks', (req, res, next) => {
  res.json(db.foods.milks);
});
router.get('/cheese', (req, res, next) => {
  res.json(db.foods.cheese);
});
router.get('/meat', (req, res, next) => {
  res.json(db.foods.meat);
});
router.get('/grains', (req, res, next) => {
  res.json(db.foods.grains);
});
router.get('/brands', (req, res, next) => {
  res.json(db.brands);
});
router.get('/full-list', (req, res, next) => {
  res.json(db.list);
});
router.get('/full', (req, res, next) => {
  res.json(db);
});
router.get('/random/:number', (req, res, next) => {
  res.send(buildRandomString(req.params.number));
});

app.use('/api', router);
// Setting port
app.listen(port, () => {
  console.log(`Your app is running on https://localhost:${port}`);
})
