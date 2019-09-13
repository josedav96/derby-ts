import { indexController, getFormController, getListaController } from '../controller/indexController';

export const indexRoute = (endPoint: string, app: any) => {
    app.get(`${endPoint}`, indexController);
}
export const formRoute = (endPoint: string, app: any) => {
    app.get(`${endPoint}`, getFormController);
}
export const listaRoute = (endPoint: string, app: any) => {
    app.get(`${endPoint}`, getListaController);
}

