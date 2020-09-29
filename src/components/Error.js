import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledError = styled.p`
	position: absolute;
	font-size: 2rem;
	z-index: -1;
	color: ${({ theme }) => theme.colors.red};
	text-align: center;
	width: 100vw;
	margin-top: 1rem;
`;
const Error = ({ error }) => (
	<div>
		<StyledError>{error}</StyledError>
	</div>
);
Error.propTypes = {
	error: PropTypes.element.isRequired,
  };
export default Error;
