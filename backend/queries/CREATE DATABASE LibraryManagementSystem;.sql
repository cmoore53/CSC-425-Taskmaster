-- Create a new database for the library management system

CREATE DATABASE LibraryManagementSystem;

 

-- Use the newly created database

USE LibraryManagementSystem;

 

-- Create a table for users

CREATE TABLE Users (

    UserID INT AUTO_INCREMENT PRIMARY KEY,

    FirstName VARCHAR(50) NOT NULL,

    LastName VARCHAR(50) NOT NULL,

    Email VARCHAR(100),

    Phone VARCHAR(20),

    Address TEXT

);

 

-- Create a table for books

CREATE TABLE Books (

    BookID INT AUTO_INCREMENT PRIMARY KEY,

    Title VARCHAR(100) NOT NULL,

    Author VARCHAR(100),

    ISBN VARCHAR(20) NOT NULL,

    PublicationYear INT,

    CopiesAvailable INT NOT NULL

);

 

-- Create a table for check-ins

CREATE TABLE Checkins (

    CheckinID INT AUTO_INCREMENT PRIMARY KEY,

    UserID INT NOT NULL,

    BookID INT NOT NULL,

    CheckinDate DATE NOT NULL,

    FOREIGN KEY (UserID) REFERENCES Users(UserID),

    FOREIGN KEY (BookID) REFERENCES Books(BookID)

);

 

-- Create a table for checkouts

CREATE TABLE Checkouts (

    CheckoutID INT AUTO_INCREMENT PRIMARY KEY,

    UserID INT NOT NULL,

    BookID INT NOT NULL,

    CheckoutDate DATE NOT NULL,

    DueDate DATE NOT NULL,

    FOREIGN KEY (UserID) REFERENCES Users(UserID),

    FOREIGN KEY (BookID) REFERENCES Books(BookID)

);

 

-- Additional relevant tables can be created as needed, such as categories, publishers, etc.

 

-- Commit the changes

COMMIT;