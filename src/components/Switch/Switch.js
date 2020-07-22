import React, { useState } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../../utils";

export default function Switch({
	className,
	label,
	size = "",
	status = "",
	checked,
}) {
	const [isChecked, setIsChecked] = useState(false || checked);
	return (
		<Container className={className} modifiers={[size, status]}>
			<StyledSwitch id="checkbox" type="checkbox" checked={isChecked} />
			<SwitchThumb
				htmlFor="switch"
				checked={isChecked}
				onClick={() => setIsChecked(!isChecked)}
			/>
			{label ? <Label>{label}</Label> : null}
		</Container>
	);
}

const CHECKBOX_MODIFIERS = {
	large: () => `
		> p {
			font-size: ${typeScale.h5}
		}
  `,
	disabled: ({ theme }) => `
  
    cursor: not-allowed;
  
		> label {
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

		> p {
			color: ${theme.disabled};
			cursor: not-allowed;
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

const SwitchThumb = styled.label`
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

const Label = styled.p`
	width: max-content;
	color: ${({ theme, disabled }) =>
		disabled ? theme.defaultGreyDisabled : theme.defaultGrey};
	margin-left: 12px;
	user-select: none;
`;
