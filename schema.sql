/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS groceries;

CREATE DATABASE groceries;

USE groceries;

CREATE TABLE groceries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  quantity INT(3) NOT NULL
);

INSERT INTO groceries (name, quantity)
VALUES  ('Frozen Blueberries', 2),
        ('Frozen Mango', 5),
        ('Frozen Spinach', 1),
        ('Pizza', 3),
        ('Bananas', 3)