CREATE DATABASE IF NOT EXISTS bd_produtos;
USE bd_produtos;

CREATE TABLE IF NOT EXISTS produtos (
    cod_produto INT(11) AUTO_INCREMENT,
    nome_produto VARCHAR(255),
    preco_produto DECIMAL(10,2),
    PRIMARY KEY (cod_produto)
);

INSERT INTO produtos VALUE (0, 'Iphone 15', 14500);
INSERT INTO produtos VALUE (0, 'Playstation 5', 6000);