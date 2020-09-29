import db from 'services/firebase';

const findUrl = async alias => {
	const data = await db.doc(alias).get();
	return data.data() === undefined;
};
export default findUrl;
