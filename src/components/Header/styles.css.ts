import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const headerContainer = style({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	padding: "2rem 0",
	width: "100%",
	maxWidth: 1180,
	margin: "0 auto",
});

export const buttonHandbag = style({
	display: "flex",
	padding: "0.75rem",
	cursor: "pointer",
	position: "relative",
	maxHeight: "3rem",
	maxWidth: "3rem",
	borderRadius: 6,
	backgroundColor: vars.colors.gray800,
	borderStyle: "none",
	color: vars.colors.gray300,
	boxSizing: "border-box",
});

export const cartCount = style({
	position: "absolute",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: vars.colors.green500,

	borderRadius: "100%",
	borderWidth: "3px",
	borderStyle: "solid",
	borderColor: vars.colors.gray900,

	height: "1.125rem",
	width: "1.125rem",
	marginTop: "calc(-2rem / 1.7)",
	marginLeft: "calc(2rem / 1.7)",

	color: vars.colors.white,
	fontWeight: 700,
	lineHeight: 0,
	fontSize: vars.fontSizes.sm,
});