import { formatLineItems } from "use-shopping-cart/utilities";
import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


export async function POST(req: NextApiRequest) {

	console.log("executando POST ================");
	//const line_items = formatLineItems(req.body as any);
	console.log("body ========================");
	console.log(req.body);
	console.log("========================");

	const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
	const cancel_url = `${process.env.NEXT_URL}/`;


	/*const checkoutSession = await stripe.checkout.sessions.create({
		success_url: success_url,
		cancel_url: cancel_url,
		mode: "payment",
		payment_method_types: ["card"],
		line_items,
	});
*/
	return NextResponse.json(
		{
			success: true,
			message: "executado",
		},
		{            
			status: 201,
		},		
	);
}