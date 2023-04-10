import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
	colors: {
		white: "#fff",
		gray900: "#121214",
		gray800: "#202024",
		gray300: "#8D8D99",
		gray100: "#C4C4CC",
		gray050: "#E1E1E6",
          
		green500: "#00875f",
		green300: "#00b37e"
	},
    
	fontSizes: {
		sm: "0.875rem", // 14px
		md: "1.125rem", // 18px
		lg: "1.25rem", // 20px
		xl: "1.5rem", // 
		"2xl": "2rem",
	}
});