import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const greenButton = style({
	marginTop: "auto",
	backgroundColor: vars.colors.green500,
	border: 0,
	fontSize: vars.fontSizes.md,
	color: vars.colors.white, 
	borderRadius: 8,
	padding: "1.25rem",
	cursor: "pointer",
	fontWeight: "bold",  
    
	":disabled": {
		opacity: 0.6,
		cursor: "not-allowed",    
	}
});

globalStyle(`${greenButton}:not(:disabled):hover`, {
	backgroundColor: vars.colors.green300
});