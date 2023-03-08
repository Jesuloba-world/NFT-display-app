import styled from "styled-components";

export const Container = styled.div`
	background-color: ${({ theme }) => theme.purpleblack};
	min-height: 100vh;
`;

export const Inner = styled.div`
	max-width: 1110px;
	margin: 0 auto;
	padding: 80px 0;
`;
