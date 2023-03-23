import { HeaderContainer } from "./styles";
import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import { Handbag } from "@phosphor-icons/react";
import Link from "next/link";

export const Header = () => {
	return (
		<HeaderContainer>
			<Link href="/">
				<Image src={logoImg} alt="" priority={true} />
			</Link>
			<button>
				<Handbag size={24} weight="bold" />
			</button>
		</HeaderContainer>
	);
};