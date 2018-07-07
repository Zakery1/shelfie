drop table if exists products;

CREATE TABLE products (
    product_id serial primary key,
    name text not null unique,
    product_price text,
    product_price int,
    picture_url text
);

-- insert into products (name, street_name, age, powers, picture_url) values ('Batman', 'Bruce', 45, 'super-rich, tool-belt, cool-buttler', 'https://www.lego.com/en-us/batmanmovie/characters');
-- INSERT INTO  (name, street_name, age, powers, picture_url) values ('Homer', 'Springfield', 30, 'unlimited hunger and thirst, mediocre dad, nuclear plant safety dude', 'http://cdn.skim.gs/images/homer-simpson-doughnuts/what-homer-simpson-taught-us-about-doughnuts
-- ')