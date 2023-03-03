import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/layout";
import Image from "next/image";
import logoImg from "../assets/logo.svg";
import { ReactNode } from "react";

globalStyles();

export default function RootLayout({ children, }: { children: ReactNode}) {
	return (
		<html lang="pt-BR">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<body>
				<Container>
					<Header>
						<Image src={logoImg} alt="" />        
					</Header>
				
					{children}
				
				</Container>
			</body>
		</html>
	);
}
