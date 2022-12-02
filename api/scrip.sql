CREATE DATABASE proyecto;
CREATE TABLE productos (id_producto INT AUTO_INCREMENT PRIMARY KEY ,
                        nombre VARCHAR (255),
                       precio VARCHAR (255));
CREATE TABLE clientes (id_cliente INT AUTO_INCREMENT PRIMARY KEY ,
                        nombre VARCHAR (255),
                       apellido VARCHAR (255),
                       edad INT (3),
                       telefono INT (11));
CREATE TABLE contacto (id_contacto INT AUTO_INCREMENT PRIMARY KEY ,
                        nombre VARCHAR (255),
                       celular INT (12),
                       email VARCHAR (255),
                       edad INT (11),
                       activo VARCHAR );

Create DATABASE login;
Create TABLE users(
	id VARCHAR(255) NOT NULL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    registered DATETIME,
    last_login DATETIME
);