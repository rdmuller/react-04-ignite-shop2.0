import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const productContainer = style({
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	alignItems: "stretch",
	gap: "4rem",
	maxWidth: 1100,
	margin: "0 auto",
});

export const imageContainer = style({
	width: "100%",
	maxWidth: 576,
	height: "calc(656px - 0.5rem)",
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

export const imageContainerLoading = style({
	width: 576,
	height: "calc(656px - 0.5rem)",
	backgroundColor: vars.colors.gray800,
	borderRadius: 8,
	display: "block",
});

export const productDetails = style({
	display: "flex",
	flexDirection: "column",
});

globalStyle(`${productDetails} h1`, {
	fontSize: vars.fontSizes["2xl"],
	color: vars.colors.gray300
});

globalStyle(`${productDetails} span`, {
	marginTop: "1rem",
	display: "block",
	fontSize: vars.fontSizes["2xl"],
	color: vars.colors.green300,
});

globalStyle(`${productDetails} p`, {
	marginTop: "2.5rem",
	fontSize: vars.fontSizes.md,
	lineHeight: "1.6rem",
	color: vars.colors.gray300
});

globalStyle(`${productDetails} button`, {
	marginTop: "auto",
	backgroundColor: vars.colors.green500,
	border: 0,
	fontSize: vars.fontSizes.md,
	color: vars.colors.white, 
	borderRadius: 8,
	padding: "1.25rem",
	cursor: "pointer",
	fontWeight: "bold",
});

globalStyle(`${productDetails} button:disabled`, {
	opacity: 0.6,
	cursor: "not-allowed",
});

globalStyle(`${productDetails} button:not(:disabled):hover`, {
	backgroundColor: vars.colors.green300
});