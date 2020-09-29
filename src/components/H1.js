import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH1 = styled.h1`
	color: ${({ theme }) => theme.colors.white};
	text-align: center;
	font-size: 5rem;
	margin-top: 10rem;
`;
const H1 = ({ text }) => (
	<div>
		<StyledH1>{text}</StyledH1>
	</div>
);
H1.propTypes = {
	text: PropTypes.element.isRequired
};
export default H1;
