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
    brewer_id INT,
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
('gollum','$2a$10$lfQi9jSfhZZhfS6/Kyzv3u3418IgnWXWDQDk7IbcwlCFPgxg9Iud2','ROLE_USER'),
('thorin', '$2a$10$JHQg13RccfC2He9Bz6a8m.5RYF5B0IdHmnEbt/gSuV8wWfxTUIFqG', 'ROLE_USER'),
('legolas', '$2a$10$E5cbsTKwDpU1RuHKuyOguu68Aqz8gn8c74N5sk6ZXs6QDLkq0IlhG', 'ROLE_USER'),
('arwen', '$2a$10$hp87ED0gZy2SgSKV5u3Y4OHRL1h2KpI5MRV8PeyBeHo8Rp8AHgRMK', 'ROLE_USER'),
('saruman', '$2a$10$8knm9ZtO1PgfXlGyFeR4LOA/gZnq6Jo2fs4i/EOQSc2MYxfQGo1m2', 'ROLE_ADMIN'),
('dumbledore', '$2a$10$DxN9U8WwaD1Lv6WppL4Oa.M8Rtj/SMRgVM4tXQZwSb7dYuEt4Jtk6', 'ROLE_ADMIN'),
('brewmaster', '$2a$10$2F8YhYwZgofOR0zA/lzISeQbDR1o6F3P7wiM8B.T6q4pckM61Kj0C', 'ROLE_BREWER'),
('barleycorn', '$2a$10$Nf7hlFEV9G4L5BWCSukD9OUtJxNe9VB1JpN8y0b3Bgs39h9RDd2m.', 'ROLE_BREWER'),
('hobbiton', '$2a$10$fuTwZsTfHSr0RrzKyHQddO8V4dIsQjx8zH2MSpTkSOE.EGttqjGsi', 'ROLE_USER'),
('rivendell', '$2a$10$GtQWyKEQp7DZ/xU0pAfKx.4U9Aa9Af68hRhH/6BSF3PrQQhx9Nqhm', 'ROLE_USER');


INSERT INTO Brewer (brewer_id, breweries_owned, user_id) VALUES
(1, 2, 4),   -- Frodo (Brewer)
(2, 1, 5),   -- Samwise (Brewer)
(3, 1, 11),  -- Dumbledore (Brewer)
(4, 3, 12),  -- Barleycorn (Brewer)
(5, 1, 3);   -- Gandalf (Admin with Brewer role)

INSERT INTO Customer (customer_id, favorite_breweries, total_reviews, user_id) VALUES
(1, '["b0e7df8b-c2b3-4824-8b3c-c12e3a1a1fda"]', 5, 1),  -- User (Customer)
(2, '["3f76421d-4d5b-4ae3-b3f0-bd6f3cf42ab8"]', 2, 2),  -- Admin (Customer)
(3, '["b0e7df8b-c2b3-4824-8b3c-c12e3a1a1fda"]', 8, 6),     -- Gollum (Customer)
(4, '["b0e7df8b-c2b3-4824-8b3c-c12e3a1a1fda"]', 3, 7),  -- Thorin (Customer)
(5, '["3f76421d-4d5b-4ae3-b3f0-bd6f3cf42ab8"]', 4, 8);   -- Legolas (Customer)

INSERT INTO Brewery (brewery_id, name, brewery_type, address, city, state_province, postal_code, country, longitude, latitude, phone, website_url, owner_id)
VALUES
('b0e7df8b-c2b3-4824-8b3c-c12e3a1a1fda', 'Twilight Brewing Company', 'brewpub', '2002 Shadow Lane', 'Seattle', 'Washington', '98101', 'United States', -122.330052, 47.606209, '206-555-0182', 'http://www.twilightbrewing.com', 2),
('3f76421d-4d5b-4ae3-b3f0-bd6f3cf42ab8', 'Sunrise Craft Brewery', 'micro', '45 Sunrise Ave', 'Phoenix', 'Arizona', '85001', 'United States', -112.074036, 33.448376, '602-555-1234', 'http://www.sunrisecraftbrewery.com', 3);


INSERT INTO CustomerFavorites (favorite_id, customer_id, brewery_id)
VALUES
(1, 1, 'b0e7df8b-c2b3-4824-8b3c-c12e3a1a1fda'),
(2, 2, 'b0e7df8b-c2b3-4824-8b3c-c12e3a1a1fda'),
(3, 3, '3f76421d-4d5b-4ae3-b3f0-bd6f3cf42ab8'),
(4, 4, '3f76421d-4d5b-4ae3-b3f0-bd6f3cf42ab8');


INSERT INTO CustomerReviews (review_id, customer_id, brewery_id, rating, review, date)
VALUES
(1, 1, 'b0e7df8b-c2b3-4824-8b3c-c12e3a1a1fda', 4, 'Great atmosphere and amazing stouts!', '2024-09-30'),
(2, 2, 'b0e7df8b-c2b3-4824-8b3c-c12e3a1a1fda', 5, 'Best IPAs in town! Highly recommend.', '2024-09-28'),
(3, 3, '3f76421d-4d5b-4ae3-b3f0-bd6f3cf42ab8', 5, 'Fantastic selection of seasonal beers!', '2024-09-29'),
(4, 4, '3f76421d-4d5b-4ae3-b3f0-bd6f3cf42ab8', 4, 'Loved the ambiance and live music!', '2024-09-27');


