const jsonServer = require("json-server");

const server = jsonServer.create();

const router = jsonServer.router("api/data.json");

const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5050;

server.use(middlewares);
server.use(router);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`JSON Server running on port ${PORT}`);
});
