import Image from "next/image";
import { Product } from "@/app/api/products/route";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CaretLeft, CaretRight, Handbag } from "@phosphor-icons/react";
import * as styles from "./styles.css";
import Link from "next/link";

interface ProductsProps {
    products: Product[]
}

export const Products = ({ products }: ProductsProps) => {
	const [ref, slider] = useKeenSlider({
		mode: "free",
		slides: { origin: "center", perView: 2.5, spacing: 48 },
	});

	function handleNextPage() {
		slider.current?.next();
	}
	
	function handlePreviousPage() {
		slider.current?.prev();
	}

	return (
		<main ref={ref} className={`keen-slider ${styles.homeContainer}`}>
			<div className={styles.buttonPreviousContainer} onClick={handlePreviousPage}>
				<CaretLeft size={48} />
			</div>

			{products.map((product) => {
				return (
					<Link href={`/product/${product.id}`} key={product.id} className={`keen-slider__slide ${styles.productContainer}`} prefetch={false}>
						<Image src={product.imageUrl} width={520} height={480} alt="" />
						<footer>
							<div>
								<strong>{product.name}</strong>
								<span>{product.price}</span>
							</div>
							<button>
								<Handbag size={32} weight="bold" />
							</button>
						</footer>
					</Link>  
				);
			})}

			<div className={styles.buttonNextContainer} onClick={handleNextPage}>
				<CaretRight size={48} />
			</div>
		</main>
	);
};