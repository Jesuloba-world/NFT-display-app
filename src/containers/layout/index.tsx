import { FC, ReactNode } from "react";
import { Container, Inner } from "./style";
import { NftDetailModalProvider } from "context";

interface layoutProps {
	children: ReactNode;
}

export const Layout: FC<layoutProps> = ({ children }) => {
	return (
		<NftDetailModalProvider>
			<Container>
				<Inner>{children}</Inner>
			</Container>
		</NftDetailModalProvider>
	);
};
