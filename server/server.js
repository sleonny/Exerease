const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("./config/connection");

// Import the typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");

// Setup the Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

// Setup Express
const app = express();

// Middleware for Express and Apollo
server.applyMiddleware({ app });

// Connection to MongoDB
mongoose
  .once("open", () => console.log("Connected to MongoDB"))
  .on("error", (error) => console.log("Error connecting to MongoDB:", error));

// Set the port
const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT}${server.graphqlPath}`
  );
});
