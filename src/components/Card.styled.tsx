import styled, { css } from "styled-components";
import { myTheme } from "../styles/Theme.styled";

type StyleCardPropsType = {
	active?: boolean
}

export const Card = styled.div<StyleCardPropsType>`
	width: 300px;
	padding: 10px;
	border-radius: 15px;
	box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
	background-color: ${myTheme.colors.cardColor.primary || 'transparent'};

	${props => props.active === true && css<StyleCardPropsType>`
		background-color: ${myTheme.colors.cardColor.secondary};
	`}
`

export const CardBody = styled.div`
	padding: 10px;
	&>*:not(:last-child){
		margin: 0 0 20px 0;
	}
`

export const CardImage = styled.div`
	width: 280px;
	height: 170px;
	flex-shrink: 0;
	border-radius: 10px;
	margin: 0 0 10px;
	background: url('https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1702252800&Signature=T~Gi~SYwUdhBpvXvgeDV4LT8~izwjg124USQ~tnY~T1L~V10ILqXp-qE0RkA-4nr9s1jFvIM-p2S~fGyvO6vMD7lB~HtlYjN4vzMwbH7vWbjhRPNjvyzD5B0EdVo3pnOtvzJeL1i2u5kkQMWEWblzjixtswy8lyLi2O78GyCJgjoGVErh-jz01-HAVDzM~T0yKTOuAylz7G9FlkD921jtwMzH1tiqN2P8L8YdsUWTcvczmmSwg9lIKySBWTMRxaMZFWCOSdPjznawuZegUr-XuNdmOMdHg9LcMTARSnqdUFyn-VKdezkyN8iBoUJ5TA04SKdjuY2NspwXK4yFaYfVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')0 0/100% auto no-repeat;
`

export const CardTitle = styled.div`
	color: #000;
	font-family: Inter;
	font-size: 16px;
	font-weight: 700;
`

export const CardText = styled.div`
	color: #ABB3BA;
	font-family: Inter;
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: 166.667%;
`

export const CardButtons = styled.div`
	display: flex;
	gap: 12px;
`