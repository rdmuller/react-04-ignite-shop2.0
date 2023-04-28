"use client";

import * as styles from "./styles.css";
import { X } from "@phosphor-icons/react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { GreenButton } from "../GreenButton";
import { Product } from "use-shopping-cart/core";
import { FormEvent, useEffect, useState } from "react";

type ProductCartProps = {
	product: Product;
}

export function ListCart() {
	const { cartCount, cartDetails, handleCloseCart, formattedTotalPrice } = useShoppingCart();
	const [isFinishing, setIsFinishing] = useState(false);
	const [cartIsEmpty, setCartIsEmpty] = useState(true);
	const productCart = Object.values(cartDetails ?? {});

	useEffect(() => {
		setCartIsEmpty(!cartCount);
	}, [cartCount]);

	async function handleCheckout(event:FormEvent) {
		event.preventDefault();
		setIsFinishing(true);

		try {
			console.log(JSON.stringify(cartDetails));

			const response = await fetch("/api/checkout", {
				method: "POST",
				mode: "cors",
				cache: "no-cache",
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json",
				},
				redirect: "follow",
				referrerPolicy: "no-referrer",
				body: JSON.stringify(cartDetails || {}),
			}).then(res => res.json());

			console.log(response);

		} catch (err) {			
			alert(`Erro finalizando compra. ${err.message}`);
		}

		setIsFinishing(false);
		
		return 0;
	}

	return (
		<form onSubmit={handleCheckout}>
			<div className={styles.listCartContainer}>
				<div>
					<button className={styles.closeButton} onClick={() => handleCloseCart()}>
						<X size={24} />
					</button>
					<h1>Sacola de compras</h1>
					{cartCount && cartCount > 0 ? (
						<>
							{productCart.map((item) => (
								<ProductCart key={item.id} product={item} />
							))}
						</>
					) : (
						<p>Sem produtos</p>
					)}
				</div>
				<div className={styles.footerContainer}>
					<div className={styles.footerContainerTotals}>
						<div>
							<span>Quantidade</span>
							<span className={styles.quantity}>{cartCount} itens</span>
						</div>
					
						<div>
							<span className={styles.valueLabel}>Valor total</span>
							<span className={styles.value}><strong>{formattedTotalPrice}</strong></span>
						</div>
					</div>

					<GreenButton type="submit" disabled={cartIsEmpty || isFinishing}>Finalizar compra</GreenButton>
				</div>
			</div>
		</form>
	);
}

function ProductCart({ product }: ProductCartProps) {
	const { removeItem } = useShoppingCart();

	return (
		<div className={styles.productContainer}>
			<div className={styles.imageContainer}>
				<Image src={product.image!} alt="" width={94} height={94} />
			</div>
			<div className={styles.productDetailsContainer}>
				<div>
					<p>{product.name}</p>
					<span>{product.formattedValue}</span>
				</div>
				<button className={styles.buttonRemove} onClick={() => removeItem(product.id)}>Remover</button>
			</div>
		</div>
	);
}



// https://github.com/brunomestanza/ignite-react/blob/main/ignite-shop/src/components/Header/index.tsx
// https://github.com/brunomestanza/ignite-react/blob/main/ignite-shop/src/pages/api/checkout.ts