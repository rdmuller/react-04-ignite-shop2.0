import { globalStyles } from "@/styles/global";
import { ReactNode } from "react";
import { getCssText } from "../styles";

globalStyles();

export default function RootLayout({ children, }: { children: ReactNode}) {
	return (
		<html lang="pt-BR">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
				<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
			</head>
			<body>{children}</body>
		</html>
	);
}
