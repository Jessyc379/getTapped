USE sys;

# ---------------------------------------------------------------------- #
# Target DBMS:           MySQL                                           #
# Project name:          Brewery Finder                                  #
# ---------------------------------------------------------------------- #
DROP DATABASE IF EXISTS breweries;

CREATE DATABASE IF NOT EXISTS breweries;

USE breweries;

# ---------------------------------------------------------------------- #
# Tables                                                                 #
# ---------------------------------------------------------------------- #

CREATE TABLE Users (
                       user_id INT NOT NULL AUTO_INCREMENT,
                       username VARCHAR(50) NOT NULL,
                       hashed_password VARCHAR(255) NOT NULL,
                       role VARCHAR(50) NOT NULL,
                       PRIMARY KEY (user_id)
);

CREATE TABLE Brewer (
    brewer_id INT PRIMARY KEY,
    breweries_owned INT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE Customer (
    customer_id INT PRIMARY KEY,
    favorite_breweries TEXT,
    total_reviews INT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Brewery (
    brewery_id UUID PRIMARY KEY,
    name VARCHAR(255),
    brewery_type VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(100),
    state_province VARCHAR(100),
    postal_code VARCHAR(20),
    country VARCHAR(100),
    longitude DOUBLE,
    latitude DOUBLE,
    phone VARCHAR(15),
    website_url VARCHAR(255),
    owner_id INT,
    FOREIGN KEY (brewer_id) REFERENCES Brewer(brewer_id)
);

CREATE TABLE CustomerFavorites (
    favorite_id INT PRIMARY KEY,
    customer_id INT,
    brewery_id UUID,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
    FOREIGN KEY (brewery_id) REFERENCES Brewery(brewery_id)
);

CREATE TABLE CustomerReviews (
    review_id INT PRIMARY KEY,
    customer_id INT,
    brewery_id UUID,
    rating INT,
    review INT,
    date DATE,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
    FOREIGN KEY (brewery_id) REFERENCES Brewery(brewery_id)
);

/*  INSERT Users  */
/* Users and Passwords
username	password
--------	--------
user		password
admin		password
gandalf		password
frodo		password
samwise		password
gollum		password

 are: password */
INSERT INTO Users (username, hashed_password, role)
VALUES  ('user','$2a$10$NkufUPF3V8dEPSZeo1fzHe9ScBu.LOay9S3N32M84yuUM2OJYEJ/.','ROLE_USER'),
('admin','$2a$10$lfQi9jSfhZZhfS6/Kyzv3u3418IgnWXWDQDk7IbcwlCFPgxg9Iud2','ROLE_ADMIN'),
('gandalf','$2a$10$lfQi9jSfhZZhfS6/Kyzv3u3418IgnWXWDQDk7IbcwlCFPgxg9Iud2','ROLE_ADMIN'),
('frodo','$2a$10$lfQi9jSfhZZhfS6/Kyzv3u3418IgnWXWDQDk7IbcwlCFPgxg9Iud2','ROLE_BREWER'),
('samwise','$2a$10$lfQi9jSfhZZhfS6/Kyzv3u3418IgnWXWDQDk7IbcwlCFPgxg9Iud2','ROLE_BREWER'),
('gollum','$2a$10$lfQi9jSfhZZhfS6/Kyzv3u3418IgnWXWDQDk7IbcwlCFPgxg9Iud2','ROLE_USER')
('thorin', '$2a$10$JHQg13RccfC2He9Bz6a8m.5RYF5B0IdHmnEbt/gSuV8wWfxTUIFqG', 'ROLE_USER'),
('legolas', '$2a$10$E5cbsTKwDpU1RuHKuyOguu68Aqz8gn8c74N5sk6ZXs6QDLkq0IlhG', 'ROLE_USER'),
('arwen', '$2a$10$hp87ED0gZy2SgSKV5u3Y4OHRL1h2KpI5MRV8PeyBeHo8Rp8AHgRMK', 'ROLE_USER'),
('saruman', '$2a$10$8knm9ZtO1PgfXlGyFeR4LOA/gZnq6Jo2fs4i/EOQSc2MYxfQGo1m2', 'ROLE_ADMIN'),
('dumbledore', '$2a$10$DxN9U8WwaD1Lv6WppL4Oa.M8Rtj/SMRgVM4tXQZwSb7dYuEt4Jtk6', 'ROLE_ADMIN'),
('brewmaster', '$2a$10$2F8YhYwZgofOR0zA/lzISeQbDR1o6F3P7wiM8B.T6q4pckM61Kj0C', 'ROLE_BREWER'),
('barleycorn', '$2a$10$Nf7hlFEV9G4L5BWCSukD9OUtJxNe9VB1JpN8y0b3Bgs39h9RDd2m.', 'ROLE_BREWER'),
('hobbiton', '$2a$10$fuTwZsTfHSr0RrzKyHQddO8V4dIsQjx8zH2MSpTkSOE.EGttqjGsi', 'ROLE_USER'),
('rivendell', '$2a$10$GtQWyKEQp7DZ/xU0pAfKx.4U9Aa9Af68hRhH/6BSF3PrQQhx9Nqhm', 'ROLE_USER');
