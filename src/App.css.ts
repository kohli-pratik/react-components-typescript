import { globalStyle } from "@vanilla-extract/css";
import { themeContract } from "./utils/css/theme/contract.css";

globalStyle("#root", {
  display: "flex",
  flexDirection: "column",
});

globalStyle("#app", {
  display: "flex",
  flexDirection: "column",
  width: "inherit",
  flex: 1,
});

globalStyle("main", {
  width: "inherit",
  backgroundColor: themeContract.color.page.background,
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: 16,
  padding: 24,
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
