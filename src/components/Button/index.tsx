interface ButtonProps {

}

export function Button() {
	return (
		<button></button>
	);
}


/*

import React from "react";

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}

export const ButtonPrimary:React.FC<ButtonProps> = props => {
    const {children, ...rest} = props;

    return (
        <button {...rest}>{children}</button>
    )
}

*/