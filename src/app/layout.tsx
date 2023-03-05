import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/layout";
import Image from "next/image";
import logoImg from "../assets/logo.svg";
import { ReactNode } from "react";
import StyledJsxRegistry from "./registry";
import { getCssText } from "@/styles";

globalStyles();

export default function RootLayout({ children, }: { children: ReactNode}) {
	return (
		<html lang="pt-BR">
			<head> 
				<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
			</head>
			<body>
				<StyledJsxRegistry>
					<Container>
						<Header>
							<Image src={logoImg} alt="" />        
						</Header>
				
						{children}
					</Container>
				</StyledJsxRegistry>
			</body>
		</html>
	);
}
