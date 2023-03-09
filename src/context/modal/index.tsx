import { createContext, FC, ReactNode, useState, useContext } from "react";
import { NftModal } from "components";
import { useNftData, statetype } from "./reducer";

type showModalType = ({}: statetype) => void;

interface nftDetailContextType {
	isShowingModal: boolean;
	showModal: showModalType;
	hideModal: () => void;
}

const defaultValue = {
	isShowingModal: false,
	showModal: () => {},
	hideModal: () => {},
};

const NftDetailModalContext = createContext<nftDetailContextType>(defaultValue);

export const NftDetailModalProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isModal, setIsModal] = useState(false);
	const { nftData, clearNftData, populateNftData } = useNftData();

	const showModal: showModalType = (data) => {
		populateNftData(data);
		setIsModal(true);
	};

	const hideModal = () => {
		clearNftData();
		setIsModal(false);
	};

	return (
		<NftDetailModalContext.Provider
			value={{
				isShowingModal: isModal,
				showModal,
				hideModal,
			}}
		>
			{isModal && <NftModal data={nftData} />}
			{children}
		</NftDetailModalContext.Provider>
	);
};

export const useNftModal = () => {
	const { hideModal, isShowingModal, showModal } = useContext(
		NftDetailModalContext
	);

	return {
		hideModal,
		isShowingModal,
		showModal,
	};
};
