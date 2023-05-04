import * as styles from "@/components/BuyProduct/styles.css";

export default function Loading() {
	return (
		<div className={styles.productContainer}>
			<div className={styles.imageContainerLoading} />
			<div className={styles.productDetails}>
				<h1>Carregando...</h1>
			</div>
		</div>
	);
}
