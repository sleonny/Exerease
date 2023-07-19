const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require('path')
const db = require("./config/connection");
const { authMiddleWare } = require("./utils/auth")

// Import the typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");

// Set the port
const PORT = process.env.PORT || 3001;
// Setup Express
const app = express();

// Setup the Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleWare,
});

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// serve static images on page load
// TO DO: move client side images into images folder
app.use("/images", express.static(path.join(__dirname,"../client/images")));

// Start production build
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname,"../client/build")))
}

// serves up index.html
app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

// Middleware for Express and Apollo
// server.applyMiddleware({ app });

// Connection to MongoDB
// mongoose
//   .once("open", () => console.log("Connected to MongoDB"))
//   .on("error", (error) => console.log("Error connecting to MongoDB:", error));

const startApolloServer = async ()=> {
  await server.start();
  server.applyMiddleware({app});
  db.once("open", ()=>{
    // Start the server
    app.listen(PORT, () => {
      console.log(`API server running on port: ${PORT}`);
      console.log(
        `GraphQL is running on http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  })

}

startApolloServer()

