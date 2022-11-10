import { setupServer } from "msw/node";
import { rest } from "msw";
import { handlers } from "server-handlers";

const server = setupServer(...handlers);

export { server, rest };
