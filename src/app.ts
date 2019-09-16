import derby from 'derby';
import path from 'path';
import { HelloWorld } from './components/HelloWorld';

const app = derby.createApp('derby-tutorial', __filename);

app.loadViews(path.join(__dirname, '..', 'views'));
app.loadStyles(path.join(__dirname, '..', 'public', 'styles'));

app.component(HelloWorld);

app.get('/hello-world', (page:any) => {
  page.render(HelloWorld.prototype.name);
})

module.exports = app;