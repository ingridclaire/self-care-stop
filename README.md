# Self-Care Stop
* a self-care web app to help you take a mindful break for a few moments
* create a username
* get new cute and funny dog gifs at the click of a button to improve your mood
* enter your longitude and latitude to disover hikes near you for some outdoor time
* regulate your breathing by matching it to the inhale/exhale animation

## Getting Started
```sh
npm install
get your API key from thedogapi.com and hikingproject.com/data
add a config.js file modeled after config.example.js
add your personal API keys to config.js were it says YOUR_API_KEY_HERE
add config.js to gitignore
npm run build
npm run start
navigate to localhost:3000
```

## Built With

* React
* axios
* express
* MySQL

## CRUD API:
| Http Verbs | Endpoint           | Action                                 | Error ?            |
|------------|--------------------|----------------------------------------|--------------------|
| POST       | /users             | adds a username to the database        |something went wrong|
| GET        | /dogs              | retrieves new dog gif from thedogapi   |something went wrong|
| GET        | //hikes/:lon&:lat  | gets hikes at coordinates from hike api|something went wrong|

