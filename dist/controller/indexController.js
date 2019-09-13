"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = (page, model, params, next) => {
    // Subscribe specifies the data to sync
    const message = model.at('hello.message');
    message.subscribe((err) => {
        if (err)
            return next(err);
        message.createNull('');
        page.render('form');
    });
};
exports.getFormController = (page, model, params, next) => {
    page.render('message');
};
exports.getListaController = (page, model, params, next) => {
    const peopleQuery = model.query('people', {});
    peopleQuery.subscribe((err) => {
        if (err)
            return next(err);
        page.render('lista');
    });
};
//# sourceMappingURL=indexController.js.map