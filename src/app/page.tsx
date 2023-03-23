"use client";

import { Product } from "./api/products/route";
import { Products } from "@/components/Products";
import { Header } from "@/components/Header";
import { use, useEffect, useState } from "react";
import { Cart } from "@/components/Cart";

async function fetchData() {
	const products = await fetch("http://localhost:3000/api/products")
		.then(res => res.json())
		.then(data => data.products);
	return products;
}

const dataPromisse = fetchData();

export default function Home() {
	//const [products, setProducts] = useState<Product[]>([]);
	//const fetchProducts: Product[] = use(dataPromisse);
	const [initialRenderComplete, setInitialRenderComplete] = useState(false);
	const products: Product[] = use(dataPromisse);
	
	useEffect(() => {
		//setProducts(fetchProducts);
		setInitialRenderComplete(true);
	}, []);

	if(initialRenderComplete) {
		return (
			<Cart>
				<Header />
				<Products products={products} />
			</Cart>			
		);} 
	else {
		return null;
	}
}

/*export default async function Home() {
	const products: Product[] = await fetch(`${process.env.NEXT_URL}/api/products`)
		.then(res => res.json())
		.then(data => data.products);

	return (
		<Cart>
			<Header />		
			<Products products={products} />
		</Cart>
	);
}*/