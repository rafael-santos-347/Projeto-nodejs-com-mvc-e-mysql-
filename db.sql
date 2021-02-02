CREATE DATABASE blog;

USE blog;

CREATE TABLE postagens (
    id int not null auto_increment primary key,
    titulo varchar(80),
    descricao text
);