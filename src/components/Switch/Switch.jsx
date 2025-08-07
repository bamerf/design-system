import React, { useState } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../../utils";

// This component has a bug where if switched using keyboard enter, mouse click stops working and vice versa

export default function Switch({
	className,
	label,
	size = "",
	status = "",
	checked,
}) {

	const [isChecked, setIsChecked] = useState(false || checked);

	const handleKey = (event) => {
		if(event.key === "Enter") setIsChecked(!isChecked)
	}

	return (
		<Container className={className} modifiers={[size, status]}>
			<StyledSwitch tabIndex="-1" id="checkbox" type="checkbox" checked={isChecked} />
			<SwitchThumb
				tabIndex={status === "disabled" ? "-1" : "0"}
				htmlFor="switch"
				checked={isChecked}
				onClick={() => setIsChecked(!isChecked)}
				onKeyUp={(event) => handleKey(event)}
			/>
			{label ? <Label>{label}</Label> : null}
		</Container>
	);
}

const CHECKBOX_MODIFIERS = {
	large: () => `
		> label {
			font-size: ${typeScale.h5}
		}
  `,
	disabled: ({ theme }) => `
  
    cursor: not-allowed;
  
		> div {
      cursor: not-allowed;
      pointer-events:none;
      background: ${theme.disabled};
      :after {
        background: ${theme.disabledBackground};
      }
    }
    
    > input {
      :checked + ${SwitchThumb} {
        background: ${theme.colorDisabled};
      }

      cursor: not-allowed;
      pointer-events:none;
    }

		> label {
			color: ${theme.disabled};
		}
	`,
};

const Container = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: max-content;

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;

const SwitchThumb = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 40px;
	height: 24px;
	border-radius: 15px;
	background: ${({ theme }) => theme.defaultGrey};
	cursor: pointer;
	&::after {
		content: "";
		display: block;
		border-radius: 50%;
		width: 18px;
		height: 18px;
		margin: 3px;
		background: white;
		transition: 0.2s;
	}
`;
const StyledSwitch = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	width: 40px;
	height: 24px;
	cursor: pointer;
	&:checked + ${SwitchThumb} {
		background: ${({ theme }) => theme.color};
		&::after {
			content: "";
			display: block;
			border-radius: 50%;
			width: 18px;
			height: 18px;
			margin-left: 19px;
			transition: 0.2s;
		}
	}
`;

const Label = styled.label`
	display: inline-block;
	width: max-content;
	color: ${({ theme, disabled }) =>
		disabled ? theme.defaultGreyDisabled : theme.defaultGrey};
	margin-left: 12px;
	user-select: none;
`;
