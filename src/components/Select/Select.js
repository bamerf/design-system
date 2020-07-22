import React, { useState } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../../utils";

export default function Select({
	min,
	max,
	className,
	value,
	size = "",
	status = "",
	label,
}) {
	return (
		<SelectContainer>
			<SelectHeader>Select</SelectHeader>
			<SelectListContainer>
				<SelectList>
					<ListItem>Mangoes</ListItem>
					<ListItem>Apples</ListItem>
					<ListItem>Oranges</ListItem>
				</SelectList>
			</SelectListContainer>
		</SelectContainer>
	);
}

const SelectContainer = styled("div")`
	width: 10.5em;
	margin: 0 auto;
`;

const SelectHeader = styled("div")`
	display: flex;
	align-items: center;
	max-width: 190px;
	height: 33px;
	border: 1px solid grey;
	border-radius: 2px;
	padding-left: 12px;
	color: #3faffa;
	background: #ffffff;
`;
const SelectListContainer = styled("div")``;
const SelectList = styled("ul")``;
const ListItem = styled("li")``;
