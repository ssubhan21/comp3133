const { gql } = require('apollo-server-express');

// Define the Movie type
const typeDefs = gql`
  type Movie {
    id: ID!
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }

  # Input type for creating and updating movies
  input MovieInput {
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }

  # Queries
  type Query {
    getMovies: [Movie]
    getMovieById(id: ID!): Movie
  }

  # Mutations
  type Mutation {
    createMovie(movieInput: MovieInput!): Movie
    updateMovie(id: ID!, movieInput: MovieInput!): Movie
    deleteMovie(id: ID!): Response
  }

  # Response type for delete mutation
  type Response {
    message: String!
  }
`;

module.exports = typeDefs;
