const defaultGenre = "Unknown";
const defaultDirector = "Unknown";

var count;

let movies = [];

movies.push({
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  genre: "Sci-Fi",
});

movies.push({
  title: "The Shawshank Redemption",
  director: "Frank Darabont",
  releaseYear: 1994,
  genre: "Drama",
});

movies.push({
  title: "The Godfather",
  director: "Francis Ford Coppola",
  releaseYear: 1972,
  genre: "Crime",
});

function validateMovie(movie) {
  if (!movie.title) movie.title = "Unknown";
  if (!movie.director) movie.director = defaultDirector;
  if (!movie.releaseYear) movie.releaseYear = 0;
  if (!movie.genre) movie.genre = defaultGenre;
}

for (let i = 0; i < movies.length; i++) {
    validateMovie(movies[i]);
}
function printMovies() {
  console.log("Movie Collection:");
  let count = 1;

  for (let movie of movies) {
    console.log(`${count}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.releaseYear}, Genre: ${movie.genre}`);
    count++;
  }
  console.log(`Total Movies: ${movies.length}`);
}

printMovies();

let sfMovies = movies.filter(movie => movie.genre === "Sci-Fi");
  sfMovies.forEach((movie, index) => {
    console.log("Sci-Fi Movies:");
    console.log(`${index + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.releaseYear}, Genre: ${movie.genre}`);
  });

const calculateAverageYear = function(movies) {
  let sum = 0;
  for (let movie of movies) {
    sum += movie.releaseYear;
  }
  return sum / movies.length;
};

const findNewestMovie = function(movies) {
  let newest = movies[0];
  for (let movie of movies) {
    if (movie.releaseYear > newest.releaseYear) {
      newest = movie;
    }
  }
  return newest;
};

const avgYear = calculateAverageYear(movies);
const newestMovie = findNewestMovie(movies);
console.log("Statistics:")
console.log(`Average Year: ${avgYear}`);
console.log(`Newest Movie: Title: ${newestMovie.title}, ${newestMovie.releaseYear}`);

function addMovie(...newMovies) {
  for (let movie of newMovies) {
    movies.push(movie);
  }
}

const newMovies = [
  {title: "Interstellar", director: "Nolan", releaseYear: 2014, genre: "Sci-Fi"}
];
addMovie(...newMovies);
console.log("최종 movies:", movies);