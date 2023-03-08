import { Container } from "./styles";
import { getNftsForAddress } from "queries";
import { useQuery } from "react-query";
import { NftCard } from "components";

export const NftContainer = () => {
	const chosenAddress = import.meta.env.VITE_CHOSEN_ADDRESS;
	const { data, error, isLoading } = useQuery("NFTs", () =>
		getNftsForAddress(chosenAddress)
	);

	isLoading === false && console.log(data);

	return (
		<Container>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				data?.result.map((nft) => <NftCard key={nft.tokenId} />)
			)}
		</Container>
	);
};
