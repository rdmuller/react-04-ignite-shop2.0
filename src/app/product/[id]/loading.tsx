import { ImageContainerLoading, ProductContainer, ProductDetails } from "./styles";

export default function Loading() {
	return (
		<ProductContainer>
			<ImageContainerLoading />

			<ProductDetails>
				<h1></h1>
				<span></span>
				<p></p>
				<button disabled>Comprar agora</button>
			</ProductDetails>
		</ProductContainer>
	);
}