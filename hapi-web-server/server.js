const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/users/{username?}",
    handler: (request, h) => {
      const { username = "peter" } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `Hai, ${username}!`;
      } 
      
      return `Hello, ${username}!`;
    },
  });

  await server.start();
  console.log(`Linkstart server at ${server.info.uri}`);
};

init();
