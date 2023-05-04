import { formatLineItems } from "use-shopping-cart/utilities";
import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
	const cart = await req.json();

	console.log("executando POST ================");
	//const line_items = await formatLineItems(body as any);
	//console.log("body ========================");
	console.log(cart);
	//console.log("=============================");
	//console.log(line_items);

	const success_url = `${process.env.NEXT_URL}/success/{CHECKOUT_SESSION_ID}`;
	const cancel_url = `${process.env.NEXT_URL}/`;

	const checkoutSession = await stripe.checkout.sessions.create({
		success_url: success_url,
		cancel_url: cancel_url,
		mode: "payment",
		payment_method_types: ["card"],
		line_items: cart,
	});

	return NextResponse.json(
		{
			checkoutUrl: checkoutSession.url,
		},
		{            
			status: 201,
		},		
	);
}