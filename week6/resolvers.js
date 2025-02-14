const Movie = require('./models/Movie');

const resolvers = {
  Query: {
    // Get all movies
    async getMovies() {
      try {
        const movies = await Movie.find();
        return movies;
      } catch (err) {
        throw new Error('Error fetching movies');
      }
    },

    // Get movie by ID
    async getMovieById(_, { id }) {
      try {
        const movie = await Movie.findById(id);
        if (!movie) {
          throw new Error('Movie not found');
        }
        return movie;
      } catch (err) {
        throw new Error('Error fetching movie');
      }
    },
  },

  Mutation: {
    // Create a new movie
    async createMovie(_, { movieInput }) {
      const { name, director_name, production_house, release_date, rating } = movieInput;
      try {
        const newMovie = new Movie({
          name,
          director_name,
          production_house,
          release_date,
          rating,
        });

        await newMovie.save();
        return newMovie;
      } catch (err) {
        throw new Error('Error creating movie');
      }
    },

    // Update an existing movie
    async updateMovie(_, { id, movieInput }) {
      const { name, director_name, production_house, release_date, rating } = movieInput;
      try {
        const movie = await Movie.findById(id);
        if (!movie) {
          throw new Error('Movie not found');
        }

        movie.name = name || movie.name;
        movie.director_name = director_name || movie.director_name;
        movie.production_house = production_house || movie.production_house;
        movie.release_date = release_date || movie.release_date;
        movie.rating = rating || movie.rating;

        await movie.save();
        return movie;
      } catch (err) {
        throw new Error('Error updating movie');
      }
    },

    // Delete movie by ID
    async deleteMovie(_, { id }) {
      try {
        const movie = await Movie.findById(id);
        if (!movie) {
          throw new Error('Movie not found');
        }

        await movie.remove();
        return { message: 'Movie deleted successfully' };
      } catch (err) {
        throw new Error('Error deleting movie');
      }
    },
  },
};

module.exports = resolvers;
