import { RouteShorthandOptions } from "fastify";

export const listCharactersOpts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          name: { type: "string" },
          age: { type: "number" },
        },
      },
    },
  },
};
