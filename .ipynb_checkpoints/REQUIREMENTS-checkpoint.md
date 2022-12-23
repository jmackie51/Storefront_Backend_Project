# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index: '/products' [GET]
- Show (args: product id): '/products/:id' [GET]
- Create (args: Product)[token required]: '/products' [POST]
- Top 5 most popular products: '/products/top_five' [GET] 
- Products by category (args: product category): '/products/category/:category' [GET]

#### Users
- Index [token required]: '/users' [GET]
- Show (args: id)[token required]: '/users/:id' [GET]
- Create (args: User)[token required]: '/users' [POST]

#### Orders
- Create (args: user id)[token required]: '/orders/new-order
- Current Order by user (args: user id, status)[token required]: '/orders/:user_id/current/:status' [GET]
- Completed Orders by user (args: user id, status)[token required]: '/orders/:user_id/completed/:status' [GET]

## Data Shapes
#### Product
Table: products_table
-  id: SERIAL PRIMARY KEY
- product_name: VARCHAR(100)
- price: NUMERIC(6,2)
- category: VARCHAR(100)

#### User
Table: users_table
- id: SERIAL PRIMARY KEY
- firstName: VARCHAR(100)
- lastName: VARCHAR(100) 
- password: VARCHAR(255) 

#### Orders
Table: orders_table
- id: SERIAL PRIMARY KEY
- user_id: BIGINT [foreign key] --> id of user who made an order

Table: order_products_table
- id: SERIAL PRIMARY KEY
- product_id: BIGINT [foreign key]--> id of product in the order
- order_number: BIGINT --> associated order number
- quantity: INT [foreign key] --> quantity of each product in the order
- status: VARCHAR(8) --> (active or complete)


