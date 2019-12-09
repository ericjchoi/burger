DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR (100) NOT NULL,
devoured BOOLEAN DEFAULT FALSE,
PRIMARY KEY (id)
);

-- for JAWSDB in heroku
-- DROP DATABASE IF EXISTS bkofhurmyio3tyjm;
-- CREATE DATABASE bkofhurmyio3tyjm;
-- USE bkofhurmyio3tyjm;

-- CREATE TABLE burgers (
-- id INT AUTO_INCREMENT NOT NULL,
-- burger_name VARCHAR (100) NOT NULL,
-- devoured BOOLEAN DEFAULT FALSE,
-- createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
-- PRIMARY KEY (id)
-- );
