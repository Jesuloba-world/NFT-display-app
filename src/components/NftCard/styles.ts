import styled from "styled-components";

export const Container = styled.div`
	width: 300px;
	height: 350px;

	background: rgba(255, 255, 255, 0.1);
	border-width: 1px 0px 0px 1px;
	border-style: solid;
	border-color: rgba(255, 255, 255, 0.75);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	padding: 10px;

	display: flex;
	flex-direction: column;
	gap: 5px;

	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.4);
	}
`;

export const ImageBox = styled.div`
	width: 280px;
	/* height: 207px; */
	flex: 1;
	border-radius: 10px;
	overflow: hidden;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

export const NameSection = styled.div`
	padding-inline: 5px;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const Name = styled.h6`
	font-weight: 600;
	font-size: 14px;
	line-height: 21px;
`;

export const Author = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
`;
