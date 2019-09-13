"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const indexController_1 = require("../controller/indexController");
exports.indexRoute = (endPoint, app) => {
    app.get(`${endPoint}`, indexController_1.indexController);
};
exports.formRoute = (endPoint, app) => {
    app.get(`${endPoint}`, indexController_1.getFormController);
};
exports.listaRoute = (endPoint, app) => {
    app.get(`${endPoint}`, indexController_1.getListaController);
};
//# sourceMappingURL=index.js.map