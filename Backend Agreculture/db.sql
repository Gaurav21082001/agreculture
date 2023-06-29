create database agri;

use agri;

create table user(
    id integer primary key auto_increment,
    name varchar(20),
    email varchar(50),
    mobile varchar(15),
    password varchar(100)
    );

create table insecticides(
    id integer primary key auto_increment,
    title varchar(20),
    description varchar(200),
    price integer,
    image varchar(50)
);

create table addtocart(
    id integer primary key auto_increment,
    title varchar(20),
    description varchar(200),
    userId integer,
    price integer,
    image varchar(50)
);
create table image1(
    id integer primary key auto_increment,
     title varchar(20),
     img varchar(50)
);
create table bid_product(
    id integer primary key auto_increment,
    title varchar(20), 
    description varchar(200),
    price integer,
    image varchar(50)
);

create table bidding(
    id integer primary key auto_increment,
    p_id integer,
    userId integer,
    price integer
);