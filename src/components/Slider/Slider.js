import React, { useState } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../../utils";

const CHECKBOX_MODIFIERS = {
	large: ({ theme }) => `
		> div {
			width: 24px;
			height: 24px;

			:after {
				width: 8px;
				height: 8px;
			}
		}

		> p {
			font-size: ${typeScale.h5}
		}

  `,
	disabled: ({ theme, checked }) => `

		cursor: not-allowed;

		> div {
			background-color: ${checked ? theme.selectDisabled : theme.disabledBackground};
			border-color: ${checked ? theme.selectDisabled : theme.disabled};
			cursor: not-allowed;
			pointer-events:none;

			:after {
				background-color: ${checked ? "white" : theme.disabledBackground};
			}
		}

		> p {
			color: ${theme.disabled};
			cursor: not-allowed;
		}
	`,
};

const Container = styled.div``;

const SliderContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;

const RangeInput = styled.input.attrs(() => ({
	type: "range",
}))`
	max-width: 250px;
	width: 100%;
	height: 3px;
	-webkit-appearance: none;
	border-radius: 50px;
	background-color: ${({ theme }) => theme.sliderDefault};
	outline: none;
	transition: all 100ms linear;

	&:hover {
		background-color: ${({ theme }) => theme.selectDefault};
	}

	&:active {
		background-color: ${({ theme }) => theme.selectDefault};

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
				value === min ? theme.sliderDefault : theme.color};
		background-color: white;
		cursor: pointer;
		-webkit-transition: 100ms;
		transition: all 100ms linear;

		&:hover {
			border-color: ${({ theme, min, value }) =>
				value === min ? theme.sliderLabel : theme.hover};
		}

		&:active {
			background-color: ${({ theme, min, value }) =>
				value === min ? theme.sliderLabel : theme.color};
			border: 3px solid
				${({ theme, min, value }) =>
					value === min ? theme.sliderLabel : theme.color};
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

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;

const RangeFill = styled.div`
	position: absolute;
	z-index: 0;
	/* max-width: 250px; */
	width: 49%;
	height: 3px;
	-webkit-appearance: none;
	border-radius: 50px;
	background-color: black;
	outline: none;
	transition: all 100ms linear;
`;

const Value = styled.p`
	color: ${({ theme }) => theme.sliderDefault};
	margin-left: 12px;
	user-select: none;

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;

const Label = styled.p`
	color: ${({ theme }) => theme.sliderLabel};
	margin-left: 5px;
	margin-bottom: 5px;
	user-select: none;

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;

export default function Slider({
	min,
	max,
	className,
	value,
	size = "",
	status = "",
}) {
	const [valueNum, setValueNum] = useState(value);
	return (
		<Container className={className}>
			<Label>Slider</Label>
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
