import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "./contract.css";

export const darkTheme = createTheme(themeContract, {
  color: {
    page: {
      background: "#0F172A",
      text: {
        primary: "#F8FAFC",
        secondary: "#94A3B8",
      },
    },
    divider: {
      background: "rgb(160, 160, 160)",
      border: "rgba(0, 0, 0, 0.12)",
    },
    surface: {
      background: "#1E293B",
      overlay: "",
    },
    accent: {
      primary: {
        background: "#60A5FA",
        text: "#0F172A",
        hover: "#3e92f9",
        active: "#1d7ff8",
        focus: "rgb(96, 165, 250, 0.4)",
      },
      secondary: {
        background: "#2DD4BF",
        text: "#0F172A",
        hover: "#27c0ad",
        active: "#23ab9a",
      },
    },
  },
});
