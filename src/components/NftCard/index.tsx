import { FC } from "react";
import { Container, ImageBox, NameSection, Name, Author } from "./styles";
import { useNftModal } from "context";

interface nftCardProps {
	name: string;
	image: string;
	author: string;
	tokenAddress: string;
	tokenId: string;
}

export const NftCard: FC<nftCardProps> = ({
	image,
	name,
	author,
	tokenAddress,
	tokenId,
}) => {
	const { showModal } = useNftModal();

	const selectNft = () => {
		showModal();
		console.log({ name, author, tokenAddress, tokenId });
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
