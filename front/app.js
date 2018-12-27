const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const app = express();
const content = require('./content/content');
const path = require('path');
let port = process.env.PORT;
if (port == null || port == "") {
  port = 7777;
}

const buildRandomString = require('../back/utils/generator');

app.set('view engine', 'pug');

// SASS
app.use(sassMiddleware({
  // Options
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

// Setting port
app.listen(port, () => {
  console.log(`Your app is running on https://localhost:${port}`);
})
