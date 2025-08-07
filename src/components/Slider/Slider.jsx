import React, { useState } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../../utils";

export default function Slider({
	min = 0,
	max = 100,
	className,
	value = 0,
	size = "",
	status = "",
	label,
}) {
	const [valueNum, setValueNum] = useState(value);
	return (
		<Container
			className={className}
			modifiers={[size, status]}
			min={min}
			value={value}
		>
			<Label>{label}</Label>
			<SliderContainer>
				<RangeInput
					min={Number(min)}
					max={max}
					value={Number(valueNum)}
					onChange={(e) => setValueNum(e.target.value)}
					tabIndex={status === "disabled" ? "-1" : "0"}
				/>
				{/* <RangeFill
					min={min}
					max={max}
					value={valueNum}
					onChange={(e) => setValueNum(e.target.value)}
				/> */}
				<Value>{valueNum}</Value>
			</SliderContainer>
		</Container>
	);
}

const CHECKBOX_MODIFIERS = {
	large: () => `
		label {
			font-size: ${typeScale.h5};
		}

  `,
	disabled: ({ theme, min, value }) => `

		cursor: not-allowed;

		> div {
			cursor: not-allowed;
			pointer-events: none;
		}

		input {
			background-color: ${theme.disabled};
			&::-webkit-slider-thumb {
				border: 3px solid ${value === min ? theme.disabled : theme.colorDisabled};
				background-color: ${theme.disabledBackground};
			}
			&::-moz-range-thumb {
				border: 3px solid ${value === min ? theme.disabled : theme.colorDisabled};
				background-color: ${theme.disabledBackground};
			}
		}

		label {
			color: ${theme.disabled};
		}
	`,
};

const Container = styled.div`
	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;

const SliderContainer = styled.div`
	display: flex;
	align-items: center;
	/* position: relative; */
`;

const RangeInput = styled.input.attrs(() => ({
	type: "range",
}))`
	max-width: 250px;
	width: 100%;
	height: 3px;
	-webkit-appearance: none;
	border-radius: 50px;
	background-color: ${({ theme }) => theme.lightGrey};
	outline: none;
	transition: all 100ms linear;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.defaultGrey};
	}

	&:active {
		background-color: ${({ theme }) => theme.defaultGrey};

		&::-webkit-slider-thumb {
			background-color: ${({ theme }) => theme.color};
			border: 0px solid ${({ theme }) => theme.color};
		}

		&::-moz-range-thumb {
			background-color: ${({ theme }) => theme.color};
			border: 0px solid ${({ theme }) => theme.color};
		}
	}

	&:focus {
		background-color: ${({ theme }) => theme.defaultGrey};

		&::-webkit-slider-thumb {
			background-color: ${({ theme }) => theme.color};
			border: 3px solid ${({ theme }) => theme.color};
		}

		&::-moz-range-thumb {
			background-color: ${({ theme }) => theme.color};
			border: 3px solid ${({ theme }) => theme.color};
		}
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		position: relative;
		z-index: 1;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 3px solid
			${({ theme, min, value }) =>
				value === min ? theme.lightGrey : theme.color};
		background-color: white;
		cursor: pointer;
		-webkit-transition: 100ms;
		transition: all 100ms linear;

		&:hover {
			border-color: ${({ theme, min, value }) =>
				value === min ? theme.defaultGrey : theme.hover};
		}

		&:active {
			background-color: ${({ theme, min, value }) =>
				value === min ? theme.defaultGrey : theme.color};
			border: 3px solid
				${({ theme, min, value }) =>
					value === min ? theme.defaultGrey : theme.color};
		}
	}

	&::-moz-range-thumb {
		width: 14px;
		height: 14px;
		position: relative;
		z-index: 1;
		border-radius: 50%;
		border: 3px solid
			${({ theme, min, value }) =>
				value === min ? theme.lightGrey : theme.color};
		background-color: white;
		cursor: pointer;
		-webkit-transition: 100ms;
		transition: all 100ms linear;

		&:hover {
			border-color: ${({ theme, min, value }) =>
				value === min ? theme.defaultGrey : theme.hover};
		}

		&:active {
			background-color: ${({ theme, min, value }) =>
				value === min ? theme.defaultGrey : theme.color};
			border: 3px solid
				${({ theme, min, value }) =>
					value === min ? theme.defaultGrey : theme.color};
		}
	}
`;

// const RangeFill = styled.div`
// 	position: absolute;
// 	z-index: 0;
// 	/* max-width: 250px; */
// 	width: 49%;
// 	height: 3px;
// 	-webkit-appearance: none;
// 	border-radius: 50px;
// 	background-color: black;
// 	outline: none;
// 	transition: all 100ms linear;
// `;

const Value = styled.p`
	color: ${({ theme }) => theme.lightGrey};
	margin-left: 12px;
	user-select: none;
`;

const Label = styled.label`
	display: inline-block;
	color: ${({ theme }) => theme.defaultGrey};
	margin-left: 5px;
	margin-bottom: 8px;
	user-select: none;
`;
