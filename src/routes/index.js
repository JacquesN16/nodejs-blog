const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

    //Get routing
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
    
    //Post routing
    
}

module.exports = route;