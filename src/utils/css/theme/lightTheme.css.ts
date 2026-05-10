import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "./contract.css";

export const lightTheme = createTheme(themeContract, {
  color: {
    page: {
      background: "#F8FAFC",
      text: {
        primary: "#0F172A",
        secondary: "#475569",
      },
    },
    divider: {
      background: "rgb(160, 160, 160)",
      border: "rgba(0, 0, 0, 0.12)",
    },
    surface: {
      background: "#FFFFFF",
      overlay: "",
    },
    accent: {
      primary: {
        background: "#2563EB",
        text: "#FFFFFF",
        hover: "#1554e0",
        active: "#124bc7",
        focus: "rgb(37, 99, 235, 0.4)",
      },
      secondary: {
        background: "#0F766E",
        text: "#FFFFFF",
        hover: "#0e6a63",
        active: "#0c5e58",
      },
    },
  },
});
