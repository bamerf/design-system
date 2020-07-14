import React, { useState } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../../utils";

const Container = styled.div``;

const SliderContainer = styled.div`
	display: flex;
	align-items: center;
`;

const RangeInput = styled.input.attrs((props) => ({
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
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 3px solid ${({ theme }) => theme.color};
		background-color: white;
		cursor: pointer;
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

	&::-moz-range-thumb {
		width: 18px;
		height: 18px;
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

const Value = styled.p`
	color: ${({ theme }) => theme.sliderDefault};
	margin-left: 12px;
`;

const Label = styled.p`
	color: ${({ theme }) => theme.sliderLabel};
	margin-left: 5px;
	margin-bottom: 5px;
`;

export default function Slider({ min, max, className, value }) {
	const [valueNum, setValueNum] = useState(value);
	return (
		<Container className={className}>
			<Label>Slider</Label>
			<SliderContainer>
				<RangeInput
					min={min}
					max={max}
					value={valueNum}
					onChange={(e) => setValueNum(e.target.value)}
				/>
				<Value>{valueNum}</Value>
			</SliderContainer>
		</Container>
	);
}
