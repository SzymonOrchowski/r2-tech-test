# README - Lizzo’s Juicy Juice Bar - The Server

Version 1.0 coded by Szymon Orchowski

Requirements:
>Node - v16.14.0</br>
>PostgreSQL - 13.4

Coded and tested only for happypath so far.
Error handling controllers, and test need to be implemented.

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
