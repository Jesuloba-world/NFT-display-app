import { useReducer } from "react";

export interface attributeType {
	trait_type: string;
	value: string | number;
}

export interface statetype {
	tokenId?: string;
	image?: string;
	name?: string;
	tokenAddress?: string;
	author?: string;
	attributes?: attributeType[];
}

interface actiontype extends statetype {
	type: "POPULATE" | "CLEAR";
}

const initialState: statetype = {
	image: "",
	name: "",
	tokenId: "",
	tokenAddress: "",
	author: "",
	attributes: [],
};

const nftDataReducer: (state: statetype, action: actiontype) => statetype = (
	state,
	action
) => {
	switch (action.type) {
		case "POPULATE":
			return {
				image: action.image,
				name: action.name,
				tokenId: action.tokenId,
				tokenAddress: action.tokenAddress,
				author: action.author,
				attributes: action.attributes,
			};
		case "CLEAR":
			return initialState;
		default:
			return state;
	}
};

export const useNftData = () => {
	const [nftData, dispatch] = useReducer(nftDataReducer, initialState);

	const populateNftData: ({}: statetype) => void = (data) => {
		dispatch({ type: "POPULATE", ...data });
	};

	const clearNftData = () => {
		dispatch({ type: "CLEAR" });
	};

	return {
		nftData,
		populateNftData,
		clearNftData,
	};
};
