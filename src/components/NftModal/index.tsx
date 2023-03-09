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
	TransferBox,
	Transfer,
	Transfers,
	Mid,
	Value,
} from "./style";
import CloseSvg from "assets/close.svg";
import TransferArrow from "assets/transferArrow.svg";
import { useNftModal, statetype } from "context";
import { useQuery } from "react-query";
import { getNftTransferData } from "queries";

interface nftModalProps {
	data: statetype;
}

export const NftModal: FC<nftModalProps> = ({ data }) => {
	const query = useQuery(data.tokenId!, () =>
		getNftTransferData(data.tokenAddress!, data.tokenId!)
	);

	// console.log(query.data);

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
				<TransferBox>
					<AttributeHead>Transfers and sales</AttributeHead>
					{query.isLoading ? (
						<h1>Loading...</h1>
					) : (
						<Transfers>
							{query.data?.result.map((transfer, index) => {
								console.log();
								return (
									<Transfer key={index}>
										<p>{`${transfer.fromAddress?.lowercase}`}</p>
										<Mid>
											{/* <Value>
												{`${parseFloat(
													(
														parseInt(
															transfer.value
																?.wei || "0"
														) || 0 / 10 ** 18
													).toLocaleString()
												)}`}{" "}
												ETH
											</Value> */}
											<TransferArrow />
										</Mid>
										<p>{`${transfer.toAddress.lowercase}`}</p>
									</Transfer>
								);
							})}
						</Transfers>
					)}
				</TransferBox>
			</Container>
		</>
	);
};
