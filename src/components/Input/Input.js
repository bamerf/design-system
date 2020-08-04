import React, { useState } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../../utils";

export default function Input({
	className,
	label,
	value,
	type = "text",
	size = "",
	status = "",
	placeholder = "Placeholder",
	helperText = "This field is required *",
}) {
	const [inputText, setInputText] = useState(value || "");

	return (
		<InputContainer
			className={className}
			modifiers={[size, status]}
			value={inputText}
		>
			{label ? <Label>{label}</Label> : null}
			<StyledInput
				type={type}
				value={inputText}
				placeholder={placeholder}
				onChange={(e) => setInputText(e.target.value)}
				disabled={status === "disabled" ? true : false}
			/>
			<Helper>{helperText}</Helper>
		</InputContainer>
	);
}

const CHECKBOX_MODIFIERS = {
	large: () => `
	width: 190px;

	input {
			height: 44px;
			font-size: ${typeScale.h5};
		}

		> p {
      font-size: ${typeScale.h5};
		}

		> h6 {
			font-size: ${typeScale.paragraph};
		}
	`,
	small: () => `
	width: 120px;

	input {
			height: 24px;
			font-size: ${typeScale.helper};
		}

		> p {
      font-size: ${typeScale.helper};
      margin-bottom: 4px;
    }
    
    > h6 {
      font-size: ${typeScale.copyright};
    }
	`,
	error: ({ theme, value }) => `
		input:not(:hover):not(:focus) {
			border-color: ${value ? theme.lightGrey : theme.status.errorColorHover}
		}
		> h6 {
			visibility: ${value ? "hidden" : "visible"};
		}
	`,
	disabled: ({ theme }) => `
  
    cursor: not-allowed;

		input {
			background-color: ${theme.disabledBackground};
			border-color: ${theme.disabled};
			color: ${theme.disabled};
			pointer-events: none;
			cursor: not-allowed;

		}

		> p {
			color: ${theme.disabled};
		}
	`,
};

const InputContainer = styled("div")`
	width: 160px;

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;

const StyledInput = styled("input")`
	width: inherit;
	height: 33px;
	background-color: white;
	border: 1px solid ${({ theme }) => theme.lightGrey};
	border-radius: 2px;
	transition: all 200ms ease-out;
	outline: none;
	padding-left: 8px;

	&:hover {
		border-color: ${({ theme }) => theme.hover};
	}

	&:focus {
		border-color: ${({ theme }) => theme.color};
	}

	&::placeholder {
		color: ${({ theme }) => theme.placeholder};
	}
`;

const Label = styled("p")`
	font-size: ${typeScale.paragraph};
	width: max-content;
	color: ${({ theme, disabled }) =>
		disabled ? theme.defaultGreyDisabled : theme.defaultGrey};
	margin-bottom: 8px;
	user-select: none;
`;

const Helper = styled("h6")`
	font-size: ${typeScale.helper};
	width: max-content;
	color: ${({ theme }) => theme.status.errorColorHover};
	margin-top: 4px;
	user-select: none;
	visibility: hidden;
`;
