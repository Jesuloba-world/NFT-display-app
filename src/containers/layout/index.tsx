import { FC, ReactNode } from "react";
import { Container } from "./style";

interface layoutProps {
	children: ReactNode;
}

export const Layout: FC<layoutProps> = ({ children }) => {
	return <Container>{children}</Container>;
};
