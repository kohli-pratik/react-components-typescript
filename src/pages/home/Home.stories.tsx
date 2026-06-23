import type { Meta, StoryObj } from "@storybook/react-vite";
import { App } from "../../App";
import { ThemeProvider } from "../../context/theme";
import { Home } from "./Home";

const HomeWrapper = () => (
  <ThemeProvider>
    <App>
      <Home />
    </App>
  </ThemeProvider>
);

type HomeMeta = Meta<typeof HomeWrapper>;
const HomeMetaData: HomeMeta = {
  title: "Home",
  component: HomeWrapper,
};

export default HomeMetaData;

type Story = StoryObj<typeof HomeMetaData>;
export const HomeStory: Story = {};
