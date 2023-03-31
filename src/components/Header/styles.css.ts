import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const HeaderContainer = style({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	padding: "2rem 0",
	width: "100%",
	maxWidth: 1180,
	margin: "0 auto",
});

export const handbag = style({
	padding: "0.75rem",
	cursor: "pointer",
	borderRadius: 6,
	backgroundColor: vars.colors.gray800,
	borderStyle: "none",
	color: vars.colors.gray300
});