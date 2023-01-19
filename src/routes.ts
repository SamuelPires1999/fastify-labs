import { FastifyInstance } from "fastify";

export default async (server: FastifyInstance) => {
  server.register(require("./features/character/routes"), { prefix: "/character" });
};
