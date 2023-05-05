import { useEffect, useState } from "react";

interface PurchaseSummaryProps {
    customerName: string;
    totalQty: number;
	urls?: string[];
}

export function PurchaseSummary({customerName, totalQty, urls}:PurchaseSummaryProps) {
	const [initialRenderComplete, setInitialRenderComplete] = useState(false);

	useEffect(() => {
		setInitialRenderComplete(true);
	}, []);

	if (initialRenderComplete) {
		return (
			<div>
				<span>Cliente: </span>{customerName}
				<span>Qtd: </span>{totalQty}
				{urls?.map(url => {
					return (
						<p key={""}>{url}</p>
					);
				})}
			</div>
		); 
	}
	else {
		return (<></>);
	}
}