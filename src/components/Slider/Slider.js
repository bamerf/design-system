import React, { useState } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../../utils";

export default function Slider({
	min,
	max,
	className,
	value,
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
		p {
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
		}

		p {
			color: ${theme.disabled};
			cursor: not-allowed;
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
		width: 18px;
		height: 18px;
		position: relative;
		z-index: 1;
		border-radius: 50%;
		border: 3px solid black;
		background-color: white;
		cursor: pointer;
		outline: 5px solid red;
		-webkit-transition: 100ms;
		transition: all 100ms linear;

		&:hover {
			border-color: ${({ theme }) => theme.hover};
		}

		&:active {
			background-color: ${({ theme }) => theme.color};
			border: 3px solid ${({ theme }) => theme.color};
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

const Label = styled.p`
	color: ${({ theme }) => theme.defaultGrey};
	margin-left: 5px;
	margin-bottom: 8px;
	user-select: none;
`;
