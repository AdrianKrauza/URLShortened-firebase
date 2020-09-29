import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
	margin: 10rem;
	width: 60rem;
	color: ${({ theme }) => theme.colors.white};
	font-size: 3rem;
	padding: .5rem;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.red};
	padding-left: 10px;
	margin: 4rem auto;
	display: block;
	background: linear-gradient(to bottom, transparent 94%, ${({ theme }) => theme.colors.red} 4%);
	background-position: -60rem 0;
	background-size: 60rem 100%;
	background-repeat: no-repeat;
	transition: background-position 0.5s cubic-bezier(.64, .09, .08, 1);
	:focus,
	:valid {
		outline: none;
		background-position: 0 0;
		~ label {
			transform: translateY(-11rem);
			font-size: 2.4rem;
			color: ${({ theme }) => theme.colors.gray};
		}
	}
	::placeholder {
		color: ${({ theme }) => theme.colors.darkGray};
	}
`;
const StyledLabel = styled.label`
	position: absolute;
	left: calc(50vw - 29rem);
	font-size: 3rem;
	z-index: -1;
	color: ${({ theme }) => theme.colors.darkGray};
	transition: transform .5s, font-size .5s, color .5s;
	transform: translateY(-8rem);
`;

const Input = ({ value, change, placeholder }) => (
	<div>
		<StyledInput value={value} onChange={e => change(e.target.value)} required />
		<StyledLabel>{placeholder}</StyledLabel>
	</div>
);
Input.propTypes = {
	value: PropTypes.element.isRequired,
	change: PropTypes.element.isRequired,
	placeholder: PropTypes.element.isRequired
};
export default Input;
