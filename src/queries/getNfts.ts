import Moralis from "moralis";
import {
	EvmChain,
	GetContractNFTsResponseAdapter,
} from "@moralisweb3/common-evm-utils";

type getNftsForAddressQuery = (
	address: string
) => Promise<GetContractNFTsResponseAdapter>;

export const getNftsForAddress: getNftsForAddressQuery = async (address) => {
	const chain = EvmChain.ETHEREUM;

	const totalRanges = 1000;

	const range = 1;

	return await Moralis.EvmApi.nft.getContractNFTs({
		address,
		chain,
		totalRanges,
		range,
	});
};
