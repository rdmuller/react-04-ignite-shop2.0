"use client";

import * as styles from "./styles.css";
import { X } from "@phosphor-icons/react";
import { useShoppingCart } from "use-shopping-cart";

export function ListCart() {
	const { cartCount, cartDetails, handleCloseCart } = useShoppingCart();

	console.log(JSON.stringify(cartDetails));

	return (
		<div className={styles.listCartContainer}>
			<button className={styles.closeButton} onClick={() => handleCloseCart()}>
				<X size={24} />
			</button>
			<h1>Sacola de compras</h1>
			{cartCount && cartCount > 0 ? (
				<>
					{Object.values(cartDetails ?? {}).map((item) => (
						<>Achou</>
					))}
				</>
			) : (
				<p>Sem produtos</p>
			)}
		</div>
	);
}