import db from 'services/firebase';

const http = 'http';
const goToUrl = async () => {
	const urlPath = window.location.pathname.split('/')[1];
	if (urlPath !== '') {
		const data = await db.doc(urlPath).get();
		if (data.data()) {
			const { url } = data.data();
			const substring = url.substring(0, 4);
			window.location.href = `${substring !== http ? `${http}://` : ''}${url}`;
		}
	}
};
export default goToUrl;
