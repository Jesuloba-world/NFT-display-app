import styled from "styled-components";

export const Container = styled.div`
	color: ${({ theme }) => theme.purpleblack};
	width: 900px;
	height: 600px;
	left: 161px;
	top: 32px;

	background: #ffffff;
	backdrop-filter: blur(25px);

	border-radius: 20px;

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;
	padding: 24px 48px;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 20px;

	@media (max-width: 900px) {
		width: 100%;
	}

	@media (max-width: 600px) {
		height: 100%;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		border-radius: 0;
		overflow-y: scroll;
	}
`;

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;

	background-color: rgba(0, 0, 0, 0.7);
	height: 100%;
	width: 100%;
	z-index: 2;
`;

export const ImageBox = styled.div`
	border-radius: 20px;
	overflow: hidden;
	height: 266px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const DetailBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const AttributeBox = styled.div`
	/* background-color: blue; */
	height: 266px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Close = styled.button`
	position: absolute;
	top: 15px;
	right: 15px;

	background-color: transparent;
	border: none;
	cursor: pointer;

	svg {
		height: 20px;
		width: 20px;
	}
`;

export const Top = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const Divider = styled.div`
	height: 0.5px;
	width: 100%;
	background-color: ${({ theme }) => theme.grey};
	margin-block: 10px;
`;

export const Author = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
`;

export const Name = styled.h6`
	font-weight: 600;
	font-size: 24px;
	line-height: 36px;
`;

export const BuyButton = styled.a`
	padding: 10px 0px;
	width: 100%;
	height: 50px;
	background: #03031c;
	border-radius: 10px;
	text-decoration: none;
	font-weight: 600;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: 0.05em;
	color: #ffffff;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const AttributeHead = styled.p`
	font-weight: 600;
	font-size: 14px;
	line-height: 21px;
`;

export const AttributesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	flex: 1;
	overflow-y: auto;
`;

export const Attribute = styled.div`
	padding: 10px;
	width: 100%;
	background: rgba(160, 159, 207, 0.05);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const AttributeType = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	color: ${({ theme }) => theme.grey};
`;

export const AttributeValue = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
`;

export const TransferBox = styled.div`
	height: 266px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Transfers = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	overflow-y: auto;
`;

export const Transfer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	border-top: 1px solid ${({ theme }) => theme.grey};

	&:last-of-type {
		border-bottom: 1px solid ${({ theme }) => theme.grey};
	}

	p {
		width: 100px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

export const Mid = styled.div``;

export const Value = styled.p``;
