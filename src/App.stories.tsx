import type { Meta, StoryObj } from "@storybook/react-vite";
import { App } from "./App";

type AppMeta = Meta<typeof App>;
const AppMetaData: AppMeta = {
  title: "App",
  component: App,
};

export default AppMetaData;

type Story = StoryObj<typeof AppMetaData>;
export const AppStory: Story = {};
