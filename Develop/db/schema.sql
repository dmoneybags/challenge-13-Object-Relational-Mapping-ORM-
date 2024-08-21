-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

\c ecommerce_db;

CREATE TABLE Category(
    Id Serial Primary Key,
    category VARCHAR(60) Not Null
);
CREATE TABLE Product(
    Id Serial Primary Key,
    product_name VARCHAR(60),
    price DECIMAL(10, 2) CHECK (price > 0),
    stock Integer Not Null CHECK (stock > 0) DEFAULT 10,
    category_id Integer,
CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES Category(Id)
);
CREATE TABLE Tag(
    Id Serial Primary Key,
    tag_name VARCHAR(60)
);
CREATE TABLE ProductTag(
    Id Serial Primary Key,
    product_id Integer,
    tag_id Integer,
CONSTRAINT fk_category_id FOREIGN KEY (tag_id) REFERENCES Tag(Id),
CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES Product(Id)
);
