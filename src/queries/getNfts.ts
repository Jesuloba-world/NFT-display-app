import Moralis from "moralis";
import {
	EvmChain,
	GetContractNFTsResponseAdapter,
} from "@moralisweb3/common-evm-utils";

type getNftsForAddressQuery = (
	address: string
) => Promise<GetContractNFTsResponseAdapter>;

let initialized = false;

const initializeSDK = async () => {
	await Moralis.start({
		apiKey: import.meta.env.VITE_MORALIS_API_KEY,
	});
	console.log("SDK initialized");
};

export const getNftsForAddress: getNftsForAddressQuery = async (address) => {
	const chain = EvmChain.ETHEREUM;

	const totalRanges = 1000;

	const range = 1;

	if (!initialized) {
		initializeSDK();
		initialized = true;
	}

	return await Moralis.EvmApi.nft.getContractNFTs({
		address,
		chain,
		totalRanges,
		range,
	});
};
