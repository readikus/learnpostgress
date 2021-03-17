# Learn Database Design and Development with Postgres & Node

A set of exercises to learn how to design a high performing database for uae with a typical web application.

## Getting Started

* Create `.env` file based on `example.env`. Environment variables can be whatever you want, but need to be consistent and use a strong password (look at strong password generators if necessary).
* Run the Docker image to start the database + Adminr, using `npm run postgres:start`
* Connect to Adminr on localhost (with the port specified) in the browser.
* Explore!

## Prebuilt Commands & Containers:

See `package.json` for some of the commands already built in.

## Project Goal

The goal of this project is to build a database for a dog groomers to manage details of customers, their dogs and have a calendar for managing bookings.

## Tasks - Initial Database Concepts & Design

1. Identify and diagram the main entities and attributes that we need to store for this system.
2. Start off implementing JUST the customer details, and do the next steps.
3. Create the database schema in adminr
4. Create some records in adminr
5. Use the search functionality in adminr
6. Look at the SQL queries and create new ones from scratch 

## Tasks - SQL queries

1. Export the database schema so it can be imported using the docker container. Also learn to change the details in the SQL schema.
2. Construct a query for listing all the dogs owned by a particular user.
3. Construct a query for the number of dogs in the system.
4. Construct a query for the owner's details + a count of the number of dogs each user owns.
5. Construct a pure SQL query that gives all the bookings for the current day. 

## Tasks - Node/Postgres integration


## Concepts to understand and practice

* What is an entity?
* Keys
* Foreign keys
* Composite keys
* Aggregate functions
* Stored procedures
* User management & security permissions
* Optimisation - indexing
* Free text search
