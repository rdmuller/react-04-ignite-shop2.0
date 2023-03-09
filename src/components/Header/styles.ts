import { styled } from "@/styles";

export const HeaderContainer = styled("header", {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	padding: "2rem 0",
	width: "100%",
	maxWidth: 1180,
	margin: "0 auto",

	button: {
		padding: "0.75rem",
		cursor: "pointer",
		borderRadius: 6,
		backgroundColor: "$gray800",
		borderStyle: "none",
		color: "$gray300"
	},
});
