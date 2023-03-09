import { createContext, FC, ReactNode, useState, useContext } from "react";
import { NftModal } from "components";

interface nftDetailContextType {
	isShowingModal: boolean;
	showModal: () => void;
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

	const showModal = () => {
		setIsModal(true);
	};

	const hideModal = () => {
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
			{isModal && <NftModal />}
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
