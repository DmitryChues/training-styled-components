import styled, { css } from "styled-components";
import { myTheme } from "../styles/Theme.styled";

type StyledBtnPropsType = {
	primary?: boolean
	outlined?: boolean
	color?: string
	active?: boolean
}

export const CardButton = styled.button<StyledBtnPropsType>`
	width: 86px;
	height: 30px;
	flex-shrink: 0;
	border-radius: 5px;
	border: none;
	font-size: 10px;
	font-weight: 700;
	line-height: 200%;
	cursor: pointer;
	transition: all 0.3s ease;

	${props => props.primary === true && css<StyledBtnPropsType>`
		background-color: ${props.color || '#00857a'};
		color: #fff;

		&:hover {
			background-color: blue;
		}
	`}

	${props => props.outlined === true && css<StyledBtnPropsType>`
		background-color: transparent;
		border: 2px solid ${props.color || '#00857a'};
		color: ${props.color};
		
		&:hover {
			background-color: blue;
			border: 2px solid blue;
			color: #fff;
		}
	`}

	${props => props.active === true && props.primary === true && css<StyledBtnPropsType>`
		background-color: ${myTheme.colors.secondary || '#00857a'};
		color: #fff;

		&:hover {
			background-color: #1f0047
		}
	`}

	${props => props.active === true && props.outlined === true && css<StyledBtnPropsType>`
		background-color: transparent;
		border: 2px solid ${myTheme.colors.secondary || '#00857a'};
		color: ${myTheme.colors.secondary};
		
		&:hover {
			background-color: #1f0047;
			border: 2px solid #1f0047;
			color: #fff;
		}
	`}

`