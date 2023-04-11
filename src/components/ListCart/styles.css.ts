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
	justifyContent: "space-between",
	boxSizing: "border-box",

	padding: "3rem",

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

export const productContainer = style({
	display: "flex",
	flexDirection: "row",
	marginBottom: "1.5rem",
});

export const productDetailsContainer = style({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
});

globalStyle(`${productDetailsContainer} div`, {
	display: "flex", 
	flexDirection: "column"
});

export const imageContainer = style({
	width: "100%",
	maxWidth: "6.375rem",
	height: "5.8rem",
	background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
	borderRadius: 8,
	padding: "0.25rem",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",	
});

globalStyle(`${imageContainer} img`, {
	objectFit: "cover",
});

