export class FormComponent {

    _model: any;
    _app: any;

    
    constructor(model: any, app: any) {
        this._model = model;
        this._app = app;
    }
    
    done(): void {
        if (!this.model.get('person.name')) {
            const checkName = this.model.on('change', 'person.name', (value: any) => {
                if (!value) return;
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
        } else {
            this.app.history.push('/people');
        }
    }
    
    get model(): any {
        return this.model;
    }

    get app(): any {
        return this.app;
    }
    
}