import type { Meta, StoryObj } from "@storybook/react";
import AspidaPage from ".";
import { getGetUserByNameMockHandler } from "../api/orval/openAPIPetstore.msw";
import { userEvent, within } from "@storybook/test";
import { delay, http } from "msw";

const meta = {
  title: "Example/AspidaPage",
  component: AspidaPage,
} satisfies Meta<typeof AspidaPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.click(canvas.getByText("fetch"));
  },
  parameters: {
    msw: {
      handlers: [getGetUserByNameMockHandler({ id: 1, username: "Foo" })],
    },
  },
};

export const Loading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.click(canvas.getByText("fetch"));
  },
  parameters: {
    msw: {
      handlers: [http.all("*", async () => await delay("infinite"))],
    },
  },
};
