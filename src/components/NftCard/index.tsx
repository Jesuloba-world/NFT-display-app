import { FC } from "react";
import { Container, ImageBox, NameSection, Name, Author } from "./styles";

interface nftCardProps {
	name: string;
	image: string;
	author: string;
}

export const NftCard: FC<nftCardProps> = ({ image, name, author }) => {
	return (
		<Container>
			<ImageBox>
				<img src={image} alt={name} />
			</ImageBox>
			<NameSection>
				<Name>{name}</Name>
				<Author>{author}</Author>
			</NameSection>
		</Container>
	);
};
