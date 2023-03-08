import { Container } from "./styles";
import { getNftsForAddress } from "queries";
import { useQuery } from "react-query";

export const NftContainer = () => {
	const chosenAddress = import.meta.env.VITE_CHOSEN_ADDRESS;
	const { data, error, isLoading } = useQuery("NFTs", () =>
		getNftsForAddress(chosenAddress)
	);

	isLoading === false && console.log(data);

	return <Container>This should display the nfts</Container>;
};
