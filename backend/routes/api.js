const express = require('express');
const router = express.Router();

const moneyRouterModule=require('./api/money');
const indexRouterModule=require('./index');

const routerModules = {
    '/money': moneyRouterModule,
};

apiRouter = DBConnect => {
    Object.keys(routerModules).forEach(path => {
        router.use(path, routerModules[path](DBConnect));
    });
    return router;
}

module.exports = apiRouter;
