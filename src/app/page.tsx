"use client";
import { HomeContainer, ProductContainer } from "@/styles/pages/home";
import Image from "next/image";
import { Product } from "./api/products/route";
import { use } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


export default function Home() {
	const products: Product[] = use(fetch(`${process.env.NEXT_URL}/api/products`)
		.then(res => res.json())
		.then(json => json.products));

	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 48,
		}
	});
	
	return (
		<>
			<HomeContainer ref={sliderRef} className="keen-slider">
				{products.map((product) => {
					return (
						<ProductContainer key={product.id} href={`/product/${product.id}`}  className="keen-slider__slide" prefetch={false}>
							<Image src={product.imageUrl} width={520} height={480} alt="" />
							<footer>
								<strong>{product.name}</strong>
								<span>{product.price}</span>
							</footer>
						</ProductContainer>
					);
				})}
			</HomeContainer>
		</>
	);
}