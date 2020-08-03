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
		<InputContainer className={className} modifiers={[size, status]}>
			{label ? <Label>{label}</Label> : null}
			<StyledInput
				type={type}
				value={inputText}
				placeholder={placeholder}
				onChange={(e) => setInputText(e.target.value)}
			/>
			<Helper>{helperText}</Helper>
		</InputContainer>
	);
}

const InputContainer = styled("div")`
	width: 160px;
	margin: 0 auto;
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

	&:before {
		content: "test";
	}
`;

const Label = styled("p")`
	font-size: ${typeScale.helper};
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
