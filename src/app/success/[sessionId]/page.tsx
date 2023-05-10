import { PurchaseSummary } from "@/components/PurchaseSummary";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

interface SuccessParams {
	params: {
		sessionId: string
	}
}

export interface ProductUrl {
    id: string;
    url: string;
}

export default async function Success({ params }: SuccessParams) {
	const sessionId = params.sessionId ? params.sessionId : "";

	const session = await stripe.checkout.sessions.retrieve(sessionId, {
		expand: ["line_items", "line_items.data.price.product"]
	});

	const customerName = session.customer_details?.name ? session.customer_details?.name : "";

	const productsUrl: ProductUrl[] = session.line_items!.data.map(line_item => {
		const product = line_item.price?.product as Stripe.Product;

		return {
			id: product.id,
			url: product.images[0],
		};
	});

	const quantity = session.line_items!.data.reduce((acu, line_item) => acu + line_item.quantity!, 0);

	return (
		<PurchaseSummary customerName={customerName} totalQty={quantity} productsUrl={productsUrl} />
	);
}