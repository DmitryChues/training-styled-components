import { Card, CardBody, CardImage, CardText, CardTitle, CardButtons } from './Card.styled';
import { CardButton } from './CardButton.styled';
import { myTheme } from '../styles/Theme.styled';

type ItemPropsType = {
	active?: boolean;
}

export function Item(props: ItemPropsType) {
	if (props.active) {
		return (
			<>
				<Card active>
					<CardImage></CardImage>
					<CardBody>
						<CardTitle>Headline</CardTitle>
						<CardText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</CardText>
						<CardButtons>
							<CardButton active color={myTheme.colors.primary} primary>See more</CardButton>
							<CardButton active color={myTheme.colors.primary} outlined>Save</CardButton>
						</CardButtons>
					</CardBody>

				</Card>
			</>
		)
	}
	return (
		<>
			<Card>
				<CardImage></CardImage>
				<CardBody>
					<CardTitle>Headline</CardTitle>
					<CardText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</CardText>
					<CardButtons>
						<CardButton color={myTheme.colors.primary} primary>See more</CardButton>
						<CardButton color={myTheme.colors.primary} outlined>Save</CardButton>
					</CardButtons>
				</CardBody>

			</Card>
		</>
	)
}