import { style } from "@vanilla-extract/css";
import { themeContract } from "../../utils/css/theme/contract.css";

export const toolsLogoLinks = style({
  display: "flex",
  gap: 16,
});

export const themeToggleSection = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const themeToggleButtons = style({
  display: "flex",
  gap: 16,
  marginTop: 32,
});

export const themeToggleButton = style({
  padding: "8px 16px",
  backgroundColor: themeContract.color.accent.primary.background,
  color: themeContract.color.accent.primary.text,
  selectors: {
    "&:hover": {
      backgroundColor: themeContract.color.accent.primary.hover,
    },
    "&:active": {
      backgroundColor: themeContract.color.accent.primary.active,
    },
  },
});

export const themeResetButton = style({
  padding: "8px 16px",
  backgroundColor: themeContract.color.accent.secondary.background,
  color: themeContract.color.accent.secondary.text,
  selectors: {
    "&:hover": {
      backgroundColor: themeContract.color.accent.secondary.hover,
    },
    "&:active": {
      backgroundColor: themeContract.color.accent.secondary.active,
    },
  },
});
