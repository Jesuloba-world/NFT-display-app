import { Container, Center } from "./styles";
import { getNftsForAddress } from "queries";
import { useQuery } from "react-query";
import { NftCard } from "components";

export const NftContainer = () => {
	const chosenAddress = import.meta.env.VITE_CHOSEN_ADDRESS;
	const { data, error, isLoading } = useQuery("NFTs", () =>
		getNftsForAddress(chosenAddress)
	);

	// isLoading === false && console.log(data);

	return (
		<Container>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				data?.result.map((nft: any) => {
					// console.log(nft);
					return (
						<Center key={nft.tokenId}>
							<NftCard
								image={nft.metadata.image as string}
								name={nft.metadata.name as string}
								author={nft.name}
								tokenAddress={nft.tokenAddress._value}
								tokenId={nft.tokenId}
							/>
						</Center>
					);
				})
			)}
		</Container>
	);
};
