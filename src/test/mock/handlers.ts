import { http, HttpResponse } from "msw";
export const handlers = [
  http.get("http://127.0.0.1:4010/user/*", () => {
    return HttpResponse.json({ id: 1, username: "Bret" });
  }),
];
