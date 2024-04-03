import { setupServer } from "msw/node";
import { getOpenAPIPetstoreMock } from "../../api/orval/openAPIPetstore.msw";

export const server = setupServer(...getOpenAPIPetstoreMock());
