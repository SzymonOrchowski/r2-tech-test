# README - Lizzo’s Juicy Juice Bar - The Server

Version 1.0 coded by Szymon Orchowski

Requirements:
>Node - v16.14.0</br>
>PostgreSQL - 13.4

Coded and tested only for happypath so far.
Error handling controllers, and test need to be implemented.

Server is prepared for hosting and works on test, development, and production databases.

<h1>Instructions:</h1>

Install all dependencies

> npm i

Create enviromental files:

> .env.dev<br/>
> .env.test

and they should look like following lines:

> PGDATABASE=juicy_juice_bar_database

> PGDATABASE=juicy_juice_bar_database

setup a database:

> npm run setup-dbs

Now you can run a test suite:

> npm run test

Or you can seed a data to database by running following script and test the server in e.g Insomnia on local port: 9090

> npm run seed

<h1>Endpoints:</h1>

<h3>/api/recipes</h3>

GET - return all recipes from the database

it takes query of "exclude_ingredients" to exclude recipes that has certain ingredients (separated by commas)
example:
> /api/recipes?exclude_ingredients=bananas,strawberries,coffee,milk,oat milk,apple juice

POST - you can add a recipe to the database

request should include a JSON object that looks exactly like following example:

```json
{
  "imageUrl": "http://www.images.com/13456734567",
  "instructions": "instructions",
  "ingredients": [
    { "name": "ingredient1", "grams": 25},
    { "name": "ingredient2", "grams": 66},
    { "name": "ingredient3", "grams": 44},
    { "name": "ingredient4", "grams": 198}
  ]
}
```


<h3>/api/recipes/:id</h3>

GET - return a single recipe of a given id from the database
