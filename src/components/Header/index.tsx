"use client";

import { HeaderContainer } from "./styles";
import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import { Handbag } from "@phosphor-icons/react";
import Link from "next/link";

export default function Header() {
	return (
		<HeaderContainer>
			<Link href="/">
				<Image src={logoImg} alt="" />
			</Link>
			<button>
				<Handbag size={24} weight="bold" />
			</button>
		</HeaderContainer>
	);
}