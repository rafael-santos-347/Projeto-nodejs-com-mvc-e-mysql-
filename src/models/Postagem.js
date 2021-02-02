const db = require('../config/connection');

class Postagem {
    constructor(){
        this.id;
        this.titulo;
        this.descricao;
    }

    getAll(req,res) {
        db.query("SELECT * FROM postagens", (erro,resultado) => {
            if(erro) {
                res.send(erro);
            } else {
                res.send(resultado);
            }
        });
    }

    cadastrarBD(req, res){
        db.query(`INSERT INTO postagens(titulo, descricao) VALUES ('${this.titulo}', '${this.descricao}');`, (erro,result) => {
            if (erro) {
                res.send(erro);
            } else {
                res.status(201).send("Cadastro efetuado com sucesso !");
            }
        });
    }
}

module.exports = new Postagem;