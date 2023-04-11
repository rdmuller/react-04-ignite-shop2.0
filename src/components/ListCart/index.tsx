"use client";

import * as styles from "./styles.css";
import { X } from "@phosphor-icons/react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

export function ListCart() {
	const { cartCount, cartDetails, handleCloseCart, formattedTotalPrice } = useShoppingCart();

	console.log(JSON.stringify(cartDetails));

	return (
		<div className={styles.listCartContainer}>
			<div>
				<button className={styles.closeButton} onClick={() => handleCloseCart()}>
					<X size={24} />
				</button>
				<h1>Sacola de compras</h1>
				{cartCount && cartCount > 0 ? (
					<>
						{Object.values(cartDetails ?? {}).map((item) => (
							<ProductCart key={item.id} product={item} />
						))}
					</>
				) : (
					<p>Sem produtos</p>
				)}
			</div>
			<div>
				<div>
					<span>Quantidade</span>
					<span>{cartCount} itens</span>
				</div>
				
				<div>
					<span>Valor total</span>
					<span>{formattedTotalPrice}</span>
				</div>
			</div>
		</div>
	);
}

type ProductCartProps = {
	product: {
		id: string;
		name: string;
		formattedValue: string;
		image: string;
	}
}

function ProductCart({ product }: ProductCartProps) {
	return (
		<div className={styles.productContainer}>
			<div className={styles.imageContainer}>
				<Image src={product.image} alt="" width={94} height={94} />
			</div>
			<div className={styles.productDetailsContainer}>
				<div>
					<span>{product.name}</span>
					<span>{product.formattedValue}</span>
				</div>
				<button>Remover</button>
			</div>
		</div>
	);
}


/*
{"id":"prod_NJoXS7odpoe7Ss",
"name":"Maratona explorer 2.0",
"image":"https://files.stripe.com/links/MDB8YWNjdF8xTVpBbmVEVXJadXR6T2dHfGZsX3Rlc3RfNWp1czBuakRlbDRzNHR2SlF4VURUYTNX00QtIak2Cd",
"currency":"BRL",
"price":9090,
"price_formatted":"R$ 90,90",
"description":"Todavia, a hegemonia do ambiente político talvez venha a ressaltar a relatividade do fluxo de informações.","defaultPriceId":"price_1MZAujDUrZutzOgGkGnrUpvp",
"quantity":1,
"value":9090,
"price_data":{},
"product_data":{},
"formattedValue":"R$ 90,90",
"formattedPrice":"R$ 90,90"}
*/