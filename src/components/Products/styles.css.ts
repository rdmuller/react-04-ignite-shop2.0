import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const homeContainer = style({
	display: "flex",
	// gap: "3rem", // o slider não contabiliza esse tamanho
	width: "100%",
	maxWidth: "calc(100vw - (100vw - 1180px) / 2)",
	marginLeft: "auto",
	minHeight: 656,
});


export const buttonNextContainer = style({	
	color: "$gray100",
	position: "absolute",
	zIndex: 1,
	cursor: "pointer",
	top: "calc(50% - (48px) / 2)",
	left: "calc(100% - 48px - 16px)",
});

export const buttonPreviousContainer = style({
	color: "$gray100",
	position: "absolute",
	zIndex: 1,
	cursor: "pointer",
	top: "calc(50% - (48px) / 2)",
	left: "16px",
});

export const productContainer = style({
	background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
	borderRadius: 8,
	cursor: "pointer",
	position: "relative",
	//overflow: "hidden",
	overflow: "auto",

	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

/*
import Link from "next/link";

export const ProductContainer = styled(Link, {
	background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
	borderRadius: 8,
	cursor: "pointer",
	position: "relative",
	//overflow: "hidden",
	overflow: "auto",

	display: "flex",
	alignItems: "center",
	justifyContent: "center",

	img: {
		objectFit: "cover",
		width: "auto",
		height: "auto",
	},

	footer: {
		position: "absolute",
		bottom: "0.25rem",
		left: "0.25rem",
		right: "0.25rem",
		padding: "1.25rem",

		borderRadius: 8,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",

		backgroundColor: "rgba(0, 0, 0, 0.6)",

		transform: "translateY(110%)",
		opacity: 0,
		transition: "all 0.2s ease-in-out",
		overflow: "hidden",

		button: {
			padding: "0.75rem",
			borderRadius: 6,
			backgroundColor: "$green500",
			cursor: "pointer",
			borderStyle: "none",

			svg: {
				color: "white"
			},

			"&:hover": {
				backgroundColor: "$green300",
			}
		},

		div: {
			display: "flex",
			flexDirection: "column",
			gap: "0.25rem"
		},

		strong: {
			fontSize: "$lg",
			color: "$gray100",
			lineHeight: "1.6",
		},

		span: {
			fontSize: "$xl",
			fontWeight: "bold",
			color: "$green300",
			lineHeight: "1.4",
		},
	},


	"&:hover": {
		footer: {
			transform: "translateY(0%)",
			opacity: 1,
		},
	},
});


export const ProductContainerLoading = styled("div", {
	borderRadius: 8,
	//position: "relative",

	display: "flex",
	flexDirection: "column",
	gap: "1.5rem",
	width: "696px",
	height: "656px",

	main: {
		backgroundColor: "$gray800",
		flex: 1,
	},

	footer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		
		strong: {
			display: "block",
			height: "2rem",
			width: "20.625rem",
			backgroundColor: "$gray800",
			borderRadius: 8,
		},

		span: {
			display: "block",
			height: "2rem",
			width: "6.25rem",
			backgroundColor: "$gray800",
			borderRadius: 8,
		},
	},
});*/