"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const derby_1 = __importDefault(require("derby"));
const path_1 = __importDefault(require("path"));
const mongoConnections_1 = __importDefault(require("./config/mongoConnections"));
const index_1 = require("./routes/index");
const formComponent_1 = require("./components/formComponent");
const app = derby_1.default.createApp('working', __filename);
app.loadViews(path_1.default.join(__dirname, '..', 'views'));
const backend = derby_1.default.createBackend({ db: mongoConnections_1.default });
const model = backend.createModel();
app.component('message:form', formComponent_1.FormComponent);
function EditForm() { }
EditForm.prototype.done = function () {
    var model = this.model;
    if (!model.get('person.name')) {
        var checkName = model.on('change', 'person.name', function (value) {
            if (!value)
                return;
            model.del('nameError');
            model.removeListener('change', checkName);
        });
        model.set('nameError', true);
        this.nameInput.focus();
        return;
    }
    if (!model.get('person.id')) {
        model.root.add('people', model.get('person'));
    }
    else {
        app.history.push('/people');
    }
};
index_1.indexRoute('/', app);
index_1.formRoute('/form', app);
index_1.listaRoute('/lista', app);
module.exports = app;
//# sourceMappingURL=app.js.map