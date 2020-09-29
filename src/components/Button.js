import styled from 'styled-components';

const StyledButton = styled.button`
	color: ${({ theme }) => theme.colors.white};
	background: ${({ theme }) => theme.colors.red};
	border: none;
	padding: 1.5rem 4rem;
	margin: auto;
	display: block;
	border-radius: 1rem;
	font-size: 4rem;
	text-align: center;
	transition: opacity .1s, transform .2s;
	outline: none;
	&:hover {
		opacity: 0.7;
	}
	&:active {
		transform: scale(0.96);
	}
`;

export default StyledButton;
