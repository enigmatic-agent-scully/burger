drop database if exists pizzasdb;
create database pizzasdb;

use pizzasdb;

create table pizzas (
id int auto_increment not null primary key,
pizza varchar(100),
devoured boolean default 0
);

