import adapter from '@sveltejs/adapter-auto';
import svemix from 'svemix/plugin';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()};
	plugins:[svemix()],
};

export default config;
