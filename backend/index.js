const app = require('express')();
const consign = require('consign');

const db = require('./config/db');

app.db = db;

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app); //passar o app para middlewares com o consign

app.listen(3000,() => {
    console.log('[Aphore] Back-end executando na porta 3000...\n');
});

