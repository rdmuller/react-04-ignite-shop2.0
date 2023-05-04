import { Cart } from "@/components/Cart";
import { ReactNode } from "react";

interface ProductsLayoutProps {
    children: ReactNode;
}

export default function ProductsLayout({children}:ProductsLayoutProps) {
	return (
		<Cart>
			{children}
		</Cart>
	);
}