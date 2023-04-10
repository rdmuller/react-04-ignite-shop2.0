import { style, globalStyle, keyframes } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const closeButton = style({
	backgroundColor: "transparent",
	color: vars.colors.gray300,
	borderStyle: "none",
	cursor: "pointer",
});

const containerIn = keyframes({
	"from": {
		width: 0,
	},

	"to": {
		width: "30rem",
	},
});

export const listCartContainer = style({
	backgroundColor: vars.colors.gray800,
	height: "100vh",
	position: "absolute",
	display: "flex",
	flexDirection: "column",
	maxWidth: "30rem",
	width: "30rem",
	top: 0,
	animation: containerIn,
	animationDuration: "0.2s",
	right: 0,
	zIndex: 2,
	overflow: "hidden",
});

globalStyle(`${listCartContainer} h1`, {
	color: vars.colors.gray050,
	fontSize: vars.fontSizes.lg, 
	fontWeight: 700,
});