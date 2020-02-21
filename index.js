const koa = require('koa');
const mount = require('koa-mount');
const static = require('koa-static');
const path = require('path');
const fs = require('fs');

const app = new koa();

app.use(static(path.join(__dirname, '/source/')));

app.use(mount('/', async (ctx) => {
    ctx.body = fs.readFileSync(path.join(__dirname, '/source/index.htm'), {encoding: 'utf-8'});
}));

app.listen(3000);