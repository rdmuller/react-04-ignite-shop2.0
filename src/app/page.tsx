"use client";
import { ButtonNextContainer, ButtonPreviousContainer, HomeContainer, ProductContainer } from "@/styles/pages/home";
import Image from "next/image";
import { Product } from "./api/products/route";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { use } from "react";
import { CaretLeft, CaretRight, Handbag } from "@phosphor-icons/react";

async function getData() {
	//const products: Product[] = await fetch(`${process.env.NEXT_URL}/api/products`)
	const data: Product[] = await fetch("http://localhost:3000/api/products")
		.then(res => res.json())
		.then(data => data.products);
	return data;
}

const fetchData = getData();

export default function Home() {
	const products = use(fetchData);

	const [ref, slider] = useKeenSlider({
		mode: "free",
		slides: { origin: "center", perView: 2.5, spacing: 48 },
	});

	function handleNextPage() {
		slider.current?.next();
	}
	
	function handlePreviousPage() {
		slider.current?.prev();
	}

	return (
		<>
			<HomeContainer ref={ref} className="keen-slider">
				<ButtonPreviousContainer onClick={handlePreviousPage}>
					<CaretLeft size={48} />
				</ButtonPreviousContainer>
				{products.map((product) => {
					return (
						<ProductContainer href={`/product/${product.id}`} key={product.id} className="keen-slider__slide" prefetch={false}>
							<Image src={product.imageUrl} width={520} height={480} alt="" />
							<footer>
								<div>
									<strong>{product.name}</strong>
									<span>{product.price}</span>
								</div>
								<button>
									<Handbag size={32} weight="bold" />
								</button>
							</footer>
						</ProductContainer>  
					);
				})}
				<ButtonNextContainer onClick={handleNextPage}>
					<CaretRight size={48} />
				</ButtonNextContainer>
			</HomeContainer>
		</>
	);
}

/*

{"products":[{"id":"prod_NJoYihQ7vn8Ixw","name":"Igniter on board","imageUrl":"https://files.stripe.com/links/MDB8YWNjdF8xTVpBbmVEVXJadXR6T2dHfGZsX3Rlc3RfQjRBQVBwRGxvVXBFRldCc0dqdzE3Wkww00AYNTN0Ie","price":"R$ 85,22"},{"id":"prod_NJoXS7odpoe7Ss","name":"Maratona explorer 2.0","imageUrl":"https://files.stripe.com/links/MDB8YWNjdF8xTVpBbmVEVXJadXR6T2dHfGZsX3Rlc3RfNWp1czBuakRlbDRzNHR2SlF4VURUYTNX00QtIak2Cd","price":"R$ 90,90"},{"id":"prod_NJoWY6RaKjor2L","name":"Ignite lab","imageUrl":"https://files.stripe.com/links/MDB8YWNjdF8xTVpBbmVEVXJadXR6T2dHfGZsX3Rlc3RfYTBiNDltM3I0ZlJQWkxMODdYaGpFYzBC007MrvrQDq","price":"R$ 169,90"},{"id":"prod_NJoV02MElz9hLw","name":"Camiseta maratona explore","imageUrl":"https://files.stripe.com/links/MDB8YWNjdF8xTVpBbmVEVXJadXR6T2dHfGZsX3Rlc3RfZEl0TzdHWm1EdUFJZ0JsOEI4aWFaQzRD00qloHxSci","price":"R$ 79,90"}]}

*/