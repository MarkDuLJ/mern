const express = require("express");
const cors = require("cors");
require("dotenv").config();
const colors = require("colors");

const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
//connect mongoDB
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development" ? true : false,
  })
);

app.listen(port, () =>
  console.log(
    `running on Port:${port} in ${process.env.NODE_ENV} Mode...`.rainbow
  )
);
