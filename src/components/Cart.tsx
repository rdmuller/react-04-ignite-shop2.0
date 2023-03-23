import { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";
import * as config from "../config";

type CartProps = {
    children: ReactNode;
}

export const Cart = ({children}: CartProps) => {
	return (
		<CartProvider cartMode="checkout-session" currency={config.CURRENCY} stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string} shouldPersist={false} >
			{children}
		</CartProvider>
	);
};