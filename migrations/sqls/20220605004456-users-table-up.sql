CREATE TABLE users_table (
    id SERIAL PRIMARY  KEY,
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    password_digest VARCHAR(255),
    username VARCHAR(255)
);
