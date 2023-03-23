import { globalStyles } from "@/styles/global";
import { Container } from "@/styles/pages/layout";
import { ReactNode } from "react";
import StyledJsxRegistry from "./registry";
import { getCssText } from "@/styles";

export default function RootLayout({ children, }: { children: ReactNode}) {
	globalStyles();

	return (
		<html lang="pt-BR">
			<head> 
				<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
			</head>
			<body>
				<StyledJsxRegistry>
					<Container>
						{children}
					</Container>
				</StyledJsxRegistry>
			</body>
		</html>
	);
}
