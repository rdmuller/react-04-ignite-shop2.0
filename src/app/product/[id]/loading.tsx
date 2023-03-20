import { ImageContainerLoading, ProductContainer, ProductDetails } from "./styles";

export default function Loading() {
	return (
		<ProductContainer>
			<ImageContainerLoading />

			<ProductDetails>
				<h1>Carregando...</h1>
			</ProductDetails>
		</ProductContainer>
	);
}