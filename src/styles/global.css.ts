import { globalStyle } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

globalStyle("*", {
	margin: 0,
	padding: 0,
});

globalStyle("body", {
	WebkitFontSmoothing: "antialiased",
	backgroundColor: vars.colors.gray900,
	color: vars.colors.gray100,
});

globalStyle("body, input, textarea, button", {
	fontFamily: "Roboto",
	fontWeight: 400,
});