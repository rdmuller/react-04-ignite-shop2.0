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

/*export const ProductDetails = styled("div", {
	display: "flex",
	flexDirection: "column",

	h1: {
		fontSize: "$2xl",
		color: "$gray300"
	},

	span: {
		marginTop: "1rem",
		display: "block",
		fontSize: "$2xl",
		color: "$green300",
	},

	p: {
		marginTop: "2.5rem",
		fontSize: "$md",
		lineHeight: "1.6rem",
		color: "$gray300",
	},

	button: {
		marginTop: "auto",
		backgroundColor: "$green500",
		border: 0,
		color: "$white", 
		borderRadius: 8,
		padding: "1.25rem",
		cursor: "pointer",
		fontWeight: "bold",

		"&:disabled": {
			opacity: 0.6,
			cursor: "not-allowed",
		},

		"&:not(:disabled):hover": {
			backgroundColor: "$green300"
		}
	}
});*/