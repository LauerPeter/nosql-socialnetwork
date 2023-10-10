
# nosql-socialnetwork (back-end)

## Description

The NoSQL Social Network API is a backend solution for a social networking platform. It allows users to create accounts, share thoughts, react to thoughts, and manage their friend lists. The application is designed to handle a large amount of unstructured data efficiently. It utilizes MongoDB for data storage and Express.js for routing, making it a robust and flexible choice for social network applications.

## Features

/api/users

GET: Retrieve all users.
GET /:userId: Retrieve a single user by their user ID.
POST: Create a new user.
PUT /:userId: Update a user by their user ID.
DELETE /:userId: Remove a user by their user ID. (Bonus: Removes associated thoughts)

/api/users/:userId/friends/:friendId

POST: Add a new friend to a user's friend list.
DELETE: Remove a friend from a user's friend list.
/api/thoughts

GET: Retrieve all thoughts.
GET /:thoughtId: Retrieve a single thought by its thought ID.
POST: Create a new thought.
PUT /:thoughtId: Update a thought by its thought ID.
DELETE /:thoughtId: Remove a thought by its thought ID.

/api/thoughts/:thoughtId/reactions

POST: Create a reaction for a specific thought.
DELETE /:reactionId: Remove a reaction by its reaction ID.

## Usage

API set up for a social network platform.

## Technologies

- JavaScript
- Mongoose
- Express
- MongoDB

## Installation

- git clone <ssh copy/paste>

- npm i

- npm start
  
## License

- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## links

- There are no links for this project. 

## Videos

Users routes walkthrough -

https://github.com/LauerPeter/nosql-socialnetwork/assets/135652706/37a8d3c2-c939-4bf3-9436-bb9046497577

Thoughts/Reactions walkthrough - 

https://github.com/LauerPeter/nosql-socialnetwork/assets/135652706/8aa85ed6-18b8-4a77-8bb6-f4fc297b9f88

Add/Remove friends walkthrough - 

https://github.com/LauerPeter/nosql-socialnetwork/assets/135652706/d185a810-3f58-4a4e-a00f-3fad64b3ff58




