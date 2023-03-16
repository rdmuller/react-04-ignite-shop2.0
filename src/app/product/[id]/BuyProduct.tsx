"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageContainer, ProductContainer, ProductDetails } from "./styles";

export interface BuyProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;        
        defaultPriceId: string;
    }
}

export default function BuyProduct({ product }: BuyProductProps) {
	const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

	async function handleBuyProduct() {
		alert("Teste");
	}

	return (
		<ProductContainer>
			<ImageContainer>
				<Image src={product.imageUrl} width={520} height={480} alt="" />
			</ImageContainer>

			<ProductDetails>
				<h1>{product.name}</h1>
				<span>{product.price}</span>
				<p>{product.description}</p>
				<button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>Comprar agora</button>
			</ProductDetails>
		</ProductContainer>
	);
}