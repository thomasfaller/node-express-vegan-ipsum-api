const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const app = express();
const path = require('path');
var content = require('./content/content');

const PORT = 7777;

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

app.listen(PORT, () => {
  console.log(`Your app is running on https:localhost:${PORT}`);
})
