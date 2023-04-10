"use client";

import * as styles from "./styles.css";
import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import { Handbag } from "@phosphor-icons/react";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export const Header = () => {
	const { handleCartClick, cartCount } = useShoppingCart();

	return (
		<div className={styles.headerContainer}>
			<Link href="/">
				<Image src={logoImg} alt="" priority={true} />
			</Link>

			<button className={styles.buttonHandbag} onClick={() => handleCartClick()}>
				{cartCount! >= 1 && <span className={styles.cartCount}>{cartCount}</span>}

				<Handbag size={24} weight="bold" />
			</button>
		</div>
	);
};