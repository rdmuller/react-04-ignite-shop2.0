import { globalStyles } from "@/styles/global";
import { Container } from "@/styles/pages/layout";
import { ReactNode } from "react";
import StyledJsxRegistry from "./registry";
import { getCssText } from "@/styles";
import Header from "@/components/Header";

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
						<Header />				
						{children}
					</Container>
				</StyledJsxRegistry>
			</body>
		</html>
	);
}
