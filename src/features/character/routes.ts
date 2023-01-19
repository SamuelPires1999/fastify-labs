import { FastifyInstance } from "fastify";
import { listCharactersOpts } from "./options";

export default async (server: FastifyInstance) => {
  server.get("/list", listCharactersOpts, (request, reply) => {
    reply.send({
      name: "Naruto",
      age: "23",
    });
  });
};
