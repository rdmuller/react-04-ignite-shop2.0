import { PurchaseSummary } from "@/components/PurchaseSummary";
import { stripe } from "@/lib/stripe";

interface SuccessParams {
	params: {
		sessionId: string
	}
}

export default async function Success({ params }: SuccessParams) {
	const sessionId = params.sessionId ? params.sessionId : "";

	const session = await stripe.checkout.sessions.retrieve(sessionId, {
		expand: ["line_items"]
	});

	const customerName = session.customer_details?.name ? session.customer_details?.name : "";

    async function getProductUrl(productId: string) {
        const product = await stripe.products.retrieve(productId);
        return product;
    }

	const products = session.line_items!.data.map(line_item => {
        const productId = line_item.price!.product;
		const product = await getProductUrl(productId);

		return JSON.stringify(product);
		//return line_item.price!.product || [""];
	});
	const quantity = session.line_items?.data.reduce((acu, line_item) => acu + line_item.quantity!, 0);

	return (
		<div>
			<span>Uhuul {customerName}, sua compra de {quantity} camisetas já </span>
			<span>está a caminho da sua casa. </span>
			{products.map(item => {
				return (
					<p key="">
                        {item}
                        <p>&nbsp;</p>
                    </p>
				);
			})}
		</div>
	);
}

//<PurchaseSummary customerName={customerName} totalQty={0} urls={products} />


/*

{"object":"list",
         "data":[{"id":"li_1N499TDUrZutzOgGWC6c18Nx",
         "object":"item",
         "amount_discount":0,
         "amount_subtotal":17044,
         "amount_tax":0,
         "amount_total":17044,
         "currency":"brl",
         "description":"Igniter on board",
         "price":{"id":"price_1MZAvRDUrZutzOgGnHFTfyya",
         "object":"price",
         "active":true,
         "billing_scheme":"per_unit",
         "created":1675852253,
         "currency":"brl",
         "custom_unit_amount":null,
         "livemode":false,
         "lookup_key":null,
         "metadata":{},
         "nickname":null,
         "product":{"id":"prod_NJoYihQ7vn8Ixw",
         "object":"product",
         "active":true,
         "attributes":[],
         "created":1675852252,
         "default_price":"price_1MZAvRDUrZutzOgGnHFTfyya",
         "description":"Pensando mais a longo prazo,
          o aumento do diálogo entre os diferentes setores produtivos obstaculiza a apreciação da importância dos paradigmas corporativos.",
         "images":["https://files.stripe.com/links/MDB8YWNjdF8xTVpBbmVEVXJadXR6T2dHfGZsX3Rlc3RfQjRBQVBwRGxvVXBFRldCc0dqdzE3Wkww00AYNTN0Ie"],
*/