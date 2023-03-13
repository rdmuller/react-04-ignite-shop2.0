"use client";
import { ButtonNextContainer, HomeContainer, ProductContainerLoading } from "../styles";
import { CaretRight } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function LoadingProducts() {
	const [ref] = useKeenSlider({
		mode: "free",
		slides: { origin: "center", perView: 2.5, spacing: 48 },
	});

	return (
		<HomeContainer ref={ref} className="keen-slider">
			<ProductContainerLoading className="keen-slider__slide">
				<main></main>
				<footer>
					<strong></strong>
					<span></span>
				</footer>
			</ProductContainerLoading>  
			<ProductContainerLoading className="keen-slider__slide">
				<main></main>
				<footer>
					<strong></strong>
					<span></span>
				</footer>
			</ProductContainerLoading>  
			<ButtonNextContainer>
				<CaretRight size={48} />
			</ButtonNextContainer>
		</HomeContainer>
	);
}
