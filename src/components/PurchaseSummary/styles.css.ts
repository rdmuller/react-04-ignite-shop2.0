import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const SuccessContainer = style({
	display: "flex",
	justifyContent: "flex-start",
	flexDirection: "column",
	alignItems: "center",
	width: "100vw",
	height: "100vh",
});

export const SuccessHeader = style({
	marginTop: "4rem",
	marginBottom: "6.5rem",
});

export const ProductsContainer = style({
	display: "flex",
	flexDirection: "row",
	paddingLeft: "3.25rem"
});

globalStyle(`${ProductsContainer} div`, {
	background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
	borderRadius: "100%",
	marginLeft: "-3.25rem",
	boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)"
});

globalStyle(`${SuccessContainer} h1`, {
	marginTop: "3rem",
	marginBottom: "1.5rem",
});

globalStyle(`${SuccessContainer} p`, {
	lineHeight: "1.4",
	fontSize: vars.fontSizes.xl,
});

export const ReturnLink = style({
	marginTop: "4rem",
	color: vars.colors.green500,
	fontSize: vars.fontSizes.lg,
	textDecoration: "none",    
	cursor: "pointer",    
	fontWeight: 700,

	":hover": {
		color: vars.colors.green300,
	}
});