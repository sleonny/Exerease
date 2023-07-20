const express = require("express");
const { ApolloServer } = require("apollo-server-express");
<<<<<<< HEAD
const path = require('path')
const db = require("./config/connection");
const { authMiddleWare } = require("./utils/auth")
=======
>>>>>>> main


// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

<<<<<<< HEAD
// Set the port
const PORT = process.env.PORT || 3001;
// Setup Express
const app = express();

// Setup the Apollo server
=======
const PORT = process.env.PORT || 3001;
>>>>>>> main
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer();
