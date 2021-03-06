const express = require("express");
const jsonServer = require("json-server");
const chokidar = require("chokidar");
const cors = require("cors");
const fs = require("fs");
const { buildSchema } = require("graphql");
const graphqlHTTP = require("express-graphql");
const queryResolvers = require("./serverQueriesResolver");
const mutationResolvers = require("./serverMutationResolvers");
const history = require("connect-history-api-fallback");

const fileName = process.argv[2] || "./data.js";
const port = process.env.PORT || 3500;

let graph = undefined;
let router = undefined;

const app = express();
const createServer = () => {
  delete require.cache[require.resolve(fileName)];
  setTimeout(() => {
    router = jsonServer.router(
      fileName.endsWith(".js") ? require(fileName)() : fileName
    );
    let schema =
      fs.readFileSync("./serverQueriesSchema.graphql", "utf-8") +
      fs.readFileSync("./serverMutationsSchema.graphql", "utf-8");
    let resolvers = { ...queryResolvers, ...mutationResolvers };
    graph = graphqlHTTP({
      schema: buildSchema(schema),
      rootValue: resolvers,
      graphiql: true,
      context: { db: router.db }
    });
  }, 100);
};

createServer();

app.use(history());
app.use("/", express.static("./build"));
app.use(cors());
app.use(jsonServer.bodyParser);
app.use("/api", (req, resp, next) => router(req, resp, next));
app.use("/graphql", (req, resp, next) => graph(req, resp, next));

chokidar.watch(fileName).on("change", () => {
  console.log("Reloading web service data..");
  createServer();
  console.log("Reload web service data is complete");
});

app.listen(port, () => console.log(`Web service is running on ${port}`));
