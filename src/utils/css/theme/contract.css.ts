import { createThemeContract } from "@vanilla-extract/css";

export const themeContract = createThemeContract({
  color: {
    // Page color for body, app container, main etc.
    page: {
      background: "",
      text: {
        primary: "",
        secondary: "",
      },
    },
    // Divider color for separating content sections, components, etc.
    divider: {
      background: "",
      border: "",
    },
    // Surface color for components like cards, modals, accordion etc.
    surface: {
      background: "",
      overlay: "",
    },
    // Accent colors for primary and secondary elements like heading, buttons, links, etc.
    accent: {
      primary: {
        background: "",
        text: "",
        hover: "",
        active: "",
        focus: "",
      },
      secondary: {
        background: "",
        text: "",
        hover: "",
        active: "",
      },
    },
  },
});
