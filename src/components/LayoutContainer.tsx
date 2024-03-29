import { ReactNode } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { Header } from "./Header";
import { ListCart } from "./ListCart";

export const LayoutContainer = ({ children }: { children: ReactNode }) => {
	const { shouldDisplayCart } = useShoppingCart();

	return (
		<>
			<Header />
			{shouldDisplayCart ? <ListCart /> : <></>}
			{children}
		</>
	);
};