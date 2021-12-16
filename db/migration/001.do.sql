-- Initial Schema
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREATE DATABASE news;

CREATE TABLE customer 
(
  id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  name character varying NOT NULL UNIQUE,
  address character varying NOT NULL UNIQUE,
  postcode character varying NOT NULL UNIQUE,
  email character varying NOT NULL UNIQUE,
  phone character varying NOT NULL UNIQUE
);

