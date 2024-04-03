import AspidaPage from ".";
import { getGetUserByNameMockHandler } from "../api/orval/openAPIPetstore.msw";
import { server } from "../test/mock/server";
import { render, screen, userEvent } from "../test/test-utils";

test("fetch", async () => {
  server.use(getGetUserByNameMockHandler({ id: 1, username: "Foo" }));

  render(<AspidaPage />);

  expect(screen.getByText("aspida")).toBeInTheDocument();

  userEvent.click(screen.getByText("fetch"));

  expect(
    await screen.findByText('swr user: {"id":1,"username":"Foo"}'),
  ).toBeInTheDocument();
});
