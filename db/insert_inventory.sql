INSERT INTO products (name, product_price, product_image)
values ($1, $2, $3, $4, $5)
returning *