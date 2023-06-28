const express = require("express");
const MongoDBConnector = require("./mongo-db-connector.js");

const PORT = process.env.PORT || 3001;
const url = 'mongodb://localhost:27017';
const dbName = 'film_database';
const collectionName = 'movies';

const app = express();
const connector = new MongoDBConnector(url, dbName)

async function loadData(){
  await connector.connect();
  const listMovies = await connector.listDocuments(collectionName);
  await connector.close();
  return await listMovies;
}
let data = [];

app.get("/listMovies", async (req, res) => {
  data = await loadData();
  await data.map(movie => {
    movie.rating = getMovieRating(movie._id);
  })
  res.json({movies: data});
  
});
app.get("/topTenMovies", async (req, res) => {
  res.json({topTen: await getTop10()});
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

function getMovieRating(id) {
  const movie = data.find(movie => id === movie._id && movie.grades != null);
  if (movie) {
    let allGrades = 0;
    let count = 0;
    movie.grades.forEach(e => {
      if (typeof (e) === "number") {
        allGrades += e;
        count++;
      }
      else return "X";
    });
    if (count && allGrades) return Math.round((allGrades / count) * 10) / 10;
    else return "X";
  }
  else return "X";
}

function getTop10(){
  const topTen = data.sort((a, b) => b.rating - a.rating);
return topTen.slice(0,10);
}