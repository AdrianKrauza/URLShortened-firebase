import db from 'services/firebase';
import findUrl from './findUrl';

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generatedUrl = alias => {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	if (alias === '') {
		for (let i = 0; i <= 4; i++) {
			alias += characters.charAt(rand(0, charactersLength - 1));
		}
	}
	return alias;
};
const createUrl = async (link, alias, setUrl, setError) => {
	setError('');
	setUrl('');
	alias = generatedUrl(alias);
	if (link === '') {
		setError('Error: Link is requested');
	} else if (await findUrl(alias)) {
		await db.doc(alias).set({
			shortened: alias,
			url: link
		});
		setUrl(alias);
	} else {
		setError('Error: Name is taken');
	}
};
export default createUrl;
