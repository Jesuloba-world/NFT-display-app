import { FC } from "react";
import {
	Container,
	Backdrop,
	ImageBox,
	DetailBox,
	AttributeBox,
	Close,
	Top,
	Author,
	Name,
	Divider,
	BuyButton,
	AttributeHead,
	Attribute,
	AttributesContainer,
	AttributeType,
	AttributeValue,
} from "./style";
import CloseSvg from "assets/close.svg";
import { useNftModal, statetype } from "context";

interface nftModalProps {
	data: statetype;
}

export const NftModal: FC<nftModalProps> = ({ data }) => {
	const { hideModal } = useNftModal();

	return (
		<>
			<Backdrop />
			<Container>
				<Close onClick={hideModal}>
					<CloseSvg />
				</Close>
				<ImageBox>
					<img src={data.image} alt={data.name} />
				</ImageBox>
				<DetailBox>
					<Top>
						<Author>{data.author}</Author>
						<Name>{data.name}</Name>
					</Top>
					<Divider />
					<BuyButton
						href={`https://opensea.io/assets/ethereum/${data.tokenAddress}/${data.tokenId}`}
						target={"_blank"}
					>
						Buy Now
					</BuyButton>
				</DetailBox>
				<AttributeBox>
					<AttributeHead>Attributes</AttributeHead>
					<AttributesContainer>
						{data.attributes &&
							data.attributes?.map((el, index) => (
								<Attribute key={index}>
									<AttributeType>
										{el.trait_type}
									</AttributeType>
									<AttributeValue>{el.value}</AttributeValue>
								</Attribute>
							))}
					</AttributesContainer>
				</AttributeBox>
			</Container>
		</>
	);
};
