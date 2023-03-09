"use client";
import { HomeContainer, ProductContainerLoading } from "@/styles/pages/home";
import { CaretRight } from "@phosphor-icons/react";

export default function Teste() {
	return (
		<HomeContainer>
			<CaretRight size={48} />
			<ProductContainerLoading>
				<footer>
					<div></div>
					<button></button>
				</footer>
			</ProductContainerLoading>  
			<ProductContainerLoading>
				<footer>
					<div></div>
					<button></button>
				</footer>
			</ProductContainerLoading>  
		</HomeContainer>
	);
}
