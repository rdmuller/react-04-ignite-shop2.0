import { createStitches } from "@stitches/react";

export const { config, styled, css, globalCss, keyframes, getCssText, theme, createTheme } = createStitches({
	theme: {
		colors: {
			white: "#fff",
			gray900: "#121214",
			gray800: "#202024",
			gray300: "#8D8D99",
			gray100: "#C4C4CC",
      
			green500: "#00875f",
			green300: "#00b37e"
		},

		fontSizes: {
			md: "1.125rem",
			lg: "1.25rem", // 20px
			xl: "1.5rem", // 
			"2xl": "2rem",
		}
	}
});