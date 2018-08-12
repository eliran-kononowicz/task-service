require('dotenv').config();

const Koa = require('koa');
const logger = require('koa-logger');
const router = require('koa-router')();

const app = new Koa();
app.use(logger());
const okResponse = (ctx) => {
    ctx.body = 'ok';
};
router.get('/liveness', okResponse).get('/readiness', okResponse);
app.use(router.routes());
app.listen(process.env.PORT);
