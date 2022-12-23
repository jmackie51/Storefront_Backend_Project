CREATE TABLE order_products_table (
    id SERIAL PRIMARY  KEY,
    product_id BIGINT,
    order_number BIGINT,
    quantity INT,
    status VARCHAR(8)
);
