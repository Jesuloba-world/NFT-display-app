import { FC, ReactNode } from "react";
import { Container, Inner } from "./style";

interface layoutProps {
	children: ReactNode;
}

export const Layout: FC<layoutProps> = ({ children }) => {
	return (
		<Container>
			<Inner>{children}</Inner>
		</Container>
	);
};
