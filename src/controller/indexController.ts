export const indexController = (page: any, model: any, params: any, next: any) => {
    // Subscribe specifies the data to sync
    const message = model.at('hello.message');
    message.subscribe((err: any) => {
        if (err) return next(err);
        message.createNull('');
        page.render('form');
    });
}

export const getFormController = (page: any, model: any, params: any, next: any) => {
    page.render('message');
}

export const getListaController = (page: any, model: any, params: any, next: any) => {
    const peopleQuery = model.query('people', {});
    peopleQuery.subscribe((err:any) => {
      if (err) return next(err);
      page.render('lista');
    });
}