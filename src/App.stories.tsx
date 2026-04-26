import type { Meta, StoryObj } from "@storybook/react-vite";
import { App } from "./App";
import { ThemeProvider } from "./context/theme";

const AppWrapper = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

type AppMeta = Meta<typeof AppWrapper>;
const AppMetaData: AppMeta = {
  title: "App",
  component: AppWrapper,
};

export default AppMetaData;

type Story = StoryObj<typeof AppMetaData>;
export const AppStory: Story = {};
