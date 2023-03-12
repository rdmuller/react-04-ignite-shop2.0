"use client";
import { ButtonNextContainer, HomeContainer, ProductContainerLoading } from "@/styles/pages/home";
import { CaretRight } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Suspense } from "react";

export default function Loading() {
	const [ref] = useKeenSlider({
		mode: "free",
		slides: { origin: "center", perView: 2.5, spacing: 48 },
	});

	return (
		<Suspense fallback={<Loading />}>
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
		</Suspense>
	);
}
