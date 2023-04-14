"use client";

import { Cart } from "@/components/Cart";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { GreenButton } from "../GreenButton";
import * as styles from "./styles.css";

export interface BuyProductProps {
    product: {
        id: string;
        name: string;
        image: string;
        price_formatted: string;
		price: number;
		currency: string;
        description: string;        
        defaultPriceId: string;
    }
}

export function BuyProduct ({ product }: BuyProductProps) {
	const [initialRenderComplete, setInitialRenderComplete] = useState(false);
	const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
	const { addItem } = useShoppingCart();

	async function handleBuyProduct() {
		setIsCreatingCheckoutSession(true);
		addItem(product);
		setIsCreatingCheckoutSession(false);
	}

	useEffect(() => {
		setInitialRenderComplete(true);
	}, []);

	if(initialRenderComplete) {
		return (
			<main className={styles.productContainer}>
				<div className={styles.imageContainer}>
					<Image src={product.image} width={520} height={480} alt="" />
				</div>

				<div className={styles.productDetails}>
					<h1>{product.name}</h1>
					<span>{product.price_formatted}</span>
					<p>{product.description}</p>
					<GreenButton disabled={isCreatingCheckoutSession} handleClick={handleBuyProduct}>Colocar na sacola</GreenButton>
				</div>
			</main>
		); 
	}
	else {
		return null;
	}
}