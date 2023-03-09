import Moralis from "moralis";
import {
	EvmChain,
	GetNFTTransfersResponseAdapter,
} from "@moralisweb3/common-evm-utils";

type getNftTransferDataQuery = (
	address: string,
	tokenId: string
) => Promise<GetNFTTransfersResponseAdapter>;

export const getNftTransferData: getNftTransferDataQuery = async (
	address,
	tokenId
) => {
	const chain = EvmChain.ETHEREUM;

	return await Moralis.EvmApi.nft.getNFTTransfers({
		address,
		chain,
		tokenId,
		limit: 10,
	});
};
