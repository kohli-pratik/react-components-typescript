import { globalStyle, style } from "@vanilla-extract/css";
import { themeContract } from "./utils/css/theme/contract.css";

globalStyle("#app", {
  width: "inherit",
  height: "inherit",
});

globalStyle("h1", {
  color: themeContract.color.accent.primary.background,
});

globalStyle("p", {
  color: themeContract.color.page.text.primary,
});

globalStyle("hr", {
  margin: 0,
  borderWidth: "0px 0px thin",
  borderStyle: "solid",
  backgroundColor: themeContract.color.divider.background,
  borderColor: themeContract.color.divider.border,
});

globalStyle("button", {
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
});

globalStyle("button:disabled", {
  cursor: "not-allowed",
});

globalStyle("*:focus", {
  outline: "0.25rem solid",
  outlineOffset: "2px",
  outlineColor: themeContract.color.accent.primary.focus,
});

export const main = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  width: "100%",
  height: "100%",
  backgroundColor: themeContract.color.page.background,
  padding: 24,
});

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
