"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FormComponent {
    constructor(model, app) {
        this._model = model;
        this._app = app;
    }
    done() {
        if (!this.model.get('person.name')) {
            const checkName = this.model.on('change', 'person.name', (value) => {
                if (!value)
                    return;
                this.model.del('nameError');
                this.model.removeListener('change', checkName);
            });
            this.model.set('nameError', true);
            return;
        }
        if (!this.model.get('person.id')) {
            this.model.root.add('people', this.model.get('person'));
            // Wait for all model changes to go through before going to the next page, mainly because
            // in non-single-page-app mode (basically IE < 10) we want changes to save to the server before leaving the page
            this.model.whenNothingPending(() => {
                this.app.history.push('/people');
            });
        }
        else {
            this.app.history.push('/people');
        }
    }
    get model() {
        return this.model;
    }
    get app() {
        return this.app;
    }
}
exports.FormComponent = FormComponent;
//# sourceMappingURL=formComponent.js.map