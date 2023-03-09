import { FC } from "react";
import { Container, ImageBox, NameSection, Name, Author } from "./styles";
import { useNftModal } from "context";
import { attributeType } from "context";

interface nftCardProps {
	name: string;
	image: string;
	author: string;
	tokenAddress: string;
	tokenId: string;
	attributes: attributeType[];
}

export const NftCard: FC<nftCardProps> = ({
	image,
	name,
	author,
	tokenAddress,
	tokenId,
	attributes,
}) => {
	const { showModal } = useNftModal();

	const selectNft = () => {
		showModal({ image, name, tokenId, tokenAddress, author, attributes });
	};

	return (
		<Container onClick={selectNft}>
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
