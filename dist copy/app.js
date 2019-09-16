const derby = require('derby');
const path = require('path');
const HelloWorld = require('./components/HelloWorld/HelloWorld');

const app = derby.createApp('derby-tutorial', __filename);

app.loadViews(path.join(__dirname, '..', 'views'));
app.loadStyles(path.join(__dirname, '..', 'public', 'styles'));

app.get('/hello-world', (page) => {
  page.render(HelloWorld.prototype.name);
})

module.exports = app;