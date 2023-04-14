import { ReactNode } from "react";
import * as styles from "./styles.css";

interface GreenButtonProps {
    children: ReactNode;
	disabled?: boolean;
    handleClick: ()  => void;
}

export function GreenButton({ children, disabled, handleClick }: GreenButtonProps) {
	return (
		<button className={styles.greenButton} onClick={handleClick} disabled={disabled}>
			{children}
		</button>
	);
}