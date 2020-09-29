import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import URLShortened from 'views/URLShortened';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const root = () => (
	<MainTemplate>
		<URLShortened />
        {/* <Router> */}
        {/* <Route component={URLShortened} /> */}
        {/* </Router> */}
	</MainTemplate>
);

export default root;
