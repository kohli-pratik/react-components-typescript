import { style } from "@vanilla-extract/css";
import { themeContract } from "../../utils/css/theme/contract.css";

export const navbar = style({
  display: "flex",
  alignItems: "center",
  gap: 16,
  width: "100%",
  height: "40px",
  backgroundColor: themeContract.color.page.background,
  padding: "24px",
  borderBottom: `1px solid ${themeContract.color.divider.border}`,
});

export const navLink = style({
  color: themeContract.color.page.text.primary,
});
