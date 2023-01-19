import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";

const server: FastifyInstance = Fastify({ logger: true });

server.register(require("./routes"));

const startServer = async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

startServer();
