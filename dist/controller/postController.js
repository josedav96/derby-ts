"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = (page, model, params, next) => {
    // Subscribe specifies the data to sync
    var message = model.at('hello.message');
    message.subscribe((err) => {
        if (err)
            return next(err);
        message.createNull('');
        page.render('index');
    });
};
//# sourceMappingURL=postController.js.map