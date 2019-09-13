import derby from 'derby';
import path from 'path';
import db from './config/mongoConnections';
import { indexRoute, formRoute, listaRoute } from './routes/index';
import { FormComponent } from './components/formComponent';

const app = derby.createApp('working', __filename);

app.loadViews(path.join(__dirname, '..', 'views'));

const backend = derby.createBackend({ db });
const model = backend.createModel();


app.component('message:form', FormComponent);

function EditForm() {}

EditForm.prototype.done = function() {
    var model = this.model;
    if (!model.get('person.name')) {
      var checkName = model.on('change', 'person.name', function(value: any) {
        if (!value) return;
        model.del('nameError');
        model.removeListener('change', checkName);
      });
      model.set('nameError', true);
      this.nameInput.focus();
      return;
    }
  
    if (!model.get('person.id')) {
      model.root.add('people', model.get('person'));
    } else {
      app.history.push('/people');
    }
};

indexRoute('/', app);
formRoute('/form', app);
listaRoute('/lista', app);


module.exports = app;