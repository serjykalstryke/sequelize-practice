DROP DATABASE IF EXISTS codegigs_db;
CREATE DATABASE codegigs_db;
USE codegigs_db;

CREATE TABLE gigs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    technologies VARCHAR(255),
    budget VARCHAR(255),
    description TEXT,
    contact_email VARCHAR(255),
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP,
    PRIMARY KEY (id)
);