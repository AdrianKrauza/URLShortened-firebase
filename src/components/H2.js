import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH2 = styled.h2`
	color: ${({ theme }) => theme.colors.gray};
	text-align: center;
	padding: 0;
	margin-bottom: 10rem;
`;
const H2 = ({ text }) => (
	<div>
		<StyledH2>{text}</StyledH2>
	</div>
);
H2.propTypes = {
	text: PropTypes.element.isRequired
};
export default H2;
