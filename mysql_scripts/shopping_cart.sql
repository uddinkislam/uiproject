CREATE schema shopping_cart;

CREATE table customer(
cust_id  int(3),
first_name		varchar(45),
last_name		varchar(45),
address		varchar(45),
city		varchar(45),
zip_code		int(5),
state		varchar(45),
email		varchar(45)
);

DESC customer;

ALTER TABLE customer ADD active varchar(45); 

CREATE table inventory_type(
id				  int(3),
description		varchar(45),
active		varchar(45)
);

CREATE table inventory(
id  int(3),
inventory_typeid		int(3),
description		varchar(45),
price		int(25),
prod_name		varchar(45),
img_path		int(5),
active		varchar(45)
);

CREATE table cart(
id  int(3),
cust_id		int(3),
inventory_id		int(3),
status		varchar(45)
);

CREATE table login(
id  int(3),
email		varchar(45),
password		varchar(45)
);

ALTER TABLE cart RENAME COLUMN cust_id TO cart_cust_id;

DESC cart;

ALTER TABLE customer ADD CONSTRAINT cust_id_pk PRIMARY KEY (cust_id);
ALTER TABLE inventory_type ADD CONSTRAINT invtpe_id_pk PRIMARY KEY (id);
ALTER TABLE inventory ADD CONSTRAINT inv_id_pk PRIMARY KEY (id);
ALTER TABLE cart ADD CONSTRAINT crt_id_pk PRIMARY KEY (id);
ALTER TABLE login ADD CONSTRAINT lgn_id_pk PRIMARY KEY (id);

CONSTRAINT boaut_ai_fk FOREIGN KEY (book_author_id) REFERENCES author(author_id)
  );

ALTER TABLE cart ADD CONSTRAINT crtcst_ci_fk foreign key (cust_id) REFERENCES customer(cust_id);

ALTER TABLE cart ADD CONSTRAINT crtinv_ii_fk foreign key (inventory_id) REFERENCES inventory(id);

ALTER TABLE login ADD CONSTRAINT lgncst_ei_fk foreign key (email) REFERENCES customer(email);

INSERT INTO Customer (cust_id, first_name, last_name, Address, City, zip_code, state, email, active)
VALUES ('01','Tom', 'B. Erichsen','Skagen 21','Stavanger','4006','Norway', 'tom.b.erichsen@gmail.com', 'yes');

select * from customer;

DESC customer;

ALTER TABLE customer ADD CONSTRAINT PK_customer_IdEm PRIMARY KEY (cust_id, email);

ALTER TABLE customer DROP CONSTRAINT cst_ci_pk;








