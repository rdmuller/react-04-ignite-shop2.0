import { CaretRight } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";
import * as styles from "../styles.css";
import "keen-slider/keen-slider.min.css";

export default function LoadingProducts() {
	const [ref] = useKeenSlider({
		mode: "free",
		slides: { origin: "center", perView: 2.5, spacing: 48 },
	});

	return (
		<main ref={ref} className={`keen-slider ${styles.homeContainer}`}>
			<div className={`keen-slider__slide ${styles.productContainerLoading}`}>
				<main></main>
				<footer>
					<strong></strong>
					<span></span>
				</footer>
			</div>  
			<div className={`keen-slider__slide ${styles.productContainerLoading}`}>
				<main></main>
				<footer>
					<strong></strong>
					<span></span>
				</footer>
			</div>  
			<div className={styles.buttonNextContainer}>
				<CaretRight size={48} />
			</div>
		</main>
	);
}