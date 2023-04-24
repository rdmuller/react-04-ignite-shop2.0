import { ReactNode } from "react";
import * as styles from "./styles.css";

interface GreenButtonProps {
    children: ReactNode;
	disabled?: boolean;
	type?: "button" | "submit";
    handleClick?: ()  => void;
}

export function GreenButton({ type="button", children, disabled, handleClick }: GreenButtonProps) {
	return (
		<button className={styles.greenButton} onClick={handleClick} disabled={disabled} type={type}>
			{children}
		</button>
	);
}