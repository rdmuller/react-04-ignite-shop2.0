"use client";

import { ProductUrl } from "@/app/success/[sessionId]/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoImg from "@/assets/logo.svg";
import * as styles from "./styles.css";

interface PurchaseSummaryProps {
    customerName: string;
    totalQty: number;
	productsUrl: ProductUrl[]
}

export function PurchaseSummary({customerName, totalQty, productsUrl}:PurchaseSummaryProps) {
	const [initialRenderComplete, setInitialRenderComplete] = useState(false);

	useEffect(() => {
		setInitialRenderComplete(true);
	}, []);

	if (initialRenderComplete) {
		return (
			<div className={styles.SuccessContainer}>
				<Image src={logoImg} alt="" priority={true} className={styles.SuccessHeader} />
				<div className={styles.ProductsContainer}>
					{productsUrl.map(item => {
						return (
							<div key={item.id}>
								<Image src={item.url} alt="" width={140} height={140}/>
							</div>
						);
					})}
				</div>
				<h1>Compra efetuada!</h1>
				<p>Uhuul <b>{customerName}</b>, sua compra de {totalQty} camisetas já </p>
				<p>está a caminho da sua casa. </p>
				<Link href="/" className={styles.ReturnLink}>
					Voltar ao catálogo
				</Link>
			</div>
		);
	}
	else {
		return (<></>);
	}
}