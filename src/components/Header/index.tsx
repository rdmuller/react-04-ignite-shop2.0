"use client";

import { HeaderContainer } from "./styles";
import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import { Handbag } from "@phosphor-icons/react";

export default function Header() {
	return (
		<HeaderContainer>
			<Image src={logoImg} alt="" />
			<button>
				<Handbag size={24} weight="bold" />
			</button>
		</HeaderContainer>
	);
}