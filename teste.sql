CREATE TABLE usuario (
    name VARCHAR(50),
    email VARCHAR(100),
    age INT
);

INSERT INTO user (name, email, age) VALUES (
    "eu",
    "email@teste5.com",
    10
);

SELECT * from user WHERE age = 10;


SELECT * FROM user WHERE age >= 18;


DELETE FROM user WHERE name = "eu";

UPDATE user SET name = "villarim" WHERE name = "tiago";