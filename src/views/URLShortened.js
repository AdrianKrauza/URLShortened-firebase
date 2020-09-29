import React, { useState } from 'react';
import Input from 'components/Input';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Error from 'components/Error';
import Button from 'components/Button';
import createUrl from 'createUrl';
import goToUrl from 'goToUrl';

const URLShortened = () => {
	const [ link, setLink ] = useState('');
	const [ alias, setAlias ] = useState('');
	const [ url, setUrl ] = useState('');
	const [ error, setError ] = useState('');
	const { host } = window.location;
	goToUrl();
	return (
		<div>
			<div>
				<H1 text="URL Shortener" />
				<H2 text="Create short & memorable links in seconds." />
				<Input value={link} change={setLink} placeholder="Enter the link here" />
				<Input value={alias} change={setAlias} placeholder="Custom name - Optional" />
				<Button onClick={() => createUrl(link, alias, setUrl, setError)}>Shorten</Button>
				{url && <H2 text={`${host}/${url}`} />}
				<Error error={error} />
			</div>
		</div>
	);
};

export default URLShortened;
