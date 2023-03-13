import { Product } from "./api/products/route";
import Products from "@/components/Products";
import { Suspense } from "react";
import LoadingProducts from "@/components/Products/Loading";

export default async function Home() {
	const products: Product[] = await fetch("http://localhost:3000/api/products")
		.then(res => res.json())
		.then(data => data.products);

	return (
		<>
			<Suspense fallback={<LoadingProducts />}>
				<Products products={products} />
			</Suspense>
		</>
	);
}