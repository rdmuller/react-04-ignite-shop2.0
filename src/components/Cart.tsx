"use client";

import { ReactNode, useEffect, useState } from "react";
import { CartProvider } from "use-shopping-cart";
import * as config from "../config";
import { LayoutContainer } from "@/components/LayoutContainer";

type CartProps = {
    children: ReactNode;
}

export const Cart = ({children}: CartProps) => {
	const [initialRenderComplete, setInitialRenderComplete] = useState(false);

	useEffect(() => {
		setInitialRenderComplete(true);
	}, []);

	if(initialRenderComplete) {
		return (
			<CartProvider 
				cartMode="checkout-session"
				currency={config.CURRENCY} 
				stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string} 
				shouldPersist={false} 
			>
				<LayoutContainer>
					{children}
				</LayoutContainer>
			</CartProvider>
		);
	}
	else {
		return null;
	}

};