# Assignment 2 - Web API.

Name: Shunyi Xu

## Features.

 + Two new API routes, including a parameterised URL
 + Mongo integration
 + Minimal React integration (GET and POST data to API)
 + Nested Document and/or object referencing in Mongo/Mongoose.
 + Basic Authentication and protected routes.
 + Good use of express middleware (e.g. error handling).
 + Substantial React App integration.
 + API documentation (for example Swagger/openAPI)
 + Additional validation using Mongoose or regular expressions.
 + Movie recommender using algorithm based on user's favourites

## Setup requirements.

+ Install related npm package
+ Enter the movies-api floder and run the command "npm run dev"
+ Enter the reactApp folder and run the command "npm start"

## API Configuration

create a .env file in the movies-api and reactApp folder

movies-api:
______________________

NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=MyMongoURL
NODE_ENV=production
SEED_DB=True
SECRET=MyJWTSecret
REACT_APP_TMDB_KEY=MyKeytoTMDB
______________________

reactApp:
______________________
REACT_APP_TMDB_KEY=MyKeytoTMDB
______________________

## API Design



## Security and Authentication

Favourite page and Recommend page are protected by JWT Authentication.
If not authenticated, all the routes to protected pages will lead to the LogIn page.


## Integrating with React App

+ I added some APIs and rewritten the methods in tmdb-api to web api. The front end reads data and sends it through web api.
+ I integrated user login, signout and signup into the front end, and used regular expressions to verify the email format when users sign up.
+ I protect Favorite page and Recommend page with the LogIn page, and only after logging in, the favicon for the movie card will appear.
+ All favorite movie ids are stored in MongoDB via API. Favorite Page will display different content according to different users.
+ According to the movies that the user has favorited, the Recommend page will find and recommend movies of the same type or with high scores.


## Independent learning (if relevant)
 