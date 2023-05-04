import { ReactNode } from "react";
import "@/styles/global.css";
import * as styles from "@/styles/pages/layout.css";

export default function RootLayout({ children, }: { children: ReactNode}) {

	return (
		<html lang="pt-BR">
			<head> 
			</head>
			<body>
				<div className={styles.container}>
					{children}
				</div>
			</body>
		</html>
	);
}
