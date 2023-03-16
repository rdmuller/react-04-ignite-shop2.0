import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import BuyProduct, { BuyProductProps } from "./BuyProduct";

interface ProductParams {
	params: {
		id: string
	}
}

export default async function Product({ params }: ProductParams) {
	const productId = params?.id ? params?.id : "";

	const product = await stripe.products.retrieve(productId, {
		expand: ["default_price"],
	});

	const price = product.default_price as Stripe.Price;

	const productProps: BuyProductProps = {
		product: {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price: Intl.NumberFormat("pt-BR", {
				currency: "BRL",
				style: "currency",
			}).format((price.unit_amount || 0) / 100),
			description: product.description || "",
			defaultPriceId: price.id,

		}
	};

	return (
		<>
			<BuyProduct product={productProps.product} />
		</>
	);
}