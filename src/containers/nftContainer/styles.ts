import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	row-gap: 32px;
	column-gap: 30px;
	grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
`;

export const Center = styled.div`
	display: flex;
	justify-content: center;
`;
