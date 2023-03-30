import * as styles from "./styles.css";
import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import { Handbag } from "@phosphor-icons/react";
import Link from "next/link";

export const Header = () => {
	return (
		<header className={styles.HeaderContainer}>
			<h1>header</h1>
		</header>
	);
};

/*
			<Link href="/">
				<Image src={logoImg} alt="" priority={true} />
			</Link>
			<button>
				<Handbag size={24} weight="bold" />
			</button>

*/