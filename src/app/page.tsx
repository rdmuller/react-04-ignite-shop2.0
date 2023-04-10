import { Product } from "./api/products/route";
import { Products } from "@/components/Products";

export default async function Home() {
	const products: Product[] = await fetch(`${process.env.NEXT_URL}/api/products`)
		.then(res => res.json())
		.then(data => data.products);
	
	return (
		<Products products={products} />
	);
}