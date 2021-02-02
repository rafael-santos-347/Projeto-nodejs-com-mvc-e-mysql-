const { Router } = require('express');
const postagens = require('./controllers/PostagensController');

const routes = new Router;

routes.get("/", postagens.indexAction);

routes.post("/postagens", postagens.cadastroBD);

module.exports = routes;