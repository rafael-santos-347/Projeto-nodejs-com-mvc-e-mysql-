const postagens = require('../models/Postagem');

class PostagensController {
    indexAction(req,res) {  // normalmente é método o nome mas em controller fica action
        postagens.getAll(req,res);
       
    }

    cadastroBD(req, res) {
        let { titulo , descricao } = req.body;
        postagens.titulo = titulo;
        postagens.descricao = descricao;
        postagens.cadastrarBD(req,res);
        
    }
}

module.exports = new PostagensController;