// adapter ww
// import adapter from '@sveltejs/adapter-node';
import adapter from "@sveltejs/adapter-netlify";
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({ postcss: true })
  ],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
      edge: false,
      split: true,
    }),
    paths: {
      base: ""
    },
    csp: {
      mode: "auto",
      directives: {
        "font-src": ["self", "https://fonts.gstatic.com"],
        "style-src": ["self", "https://fonts.googleapis.com", "*"],
        "img-src": ["self", "media.discordapp.net", "https://reviewer-book.pockethost.io"],
        "default-src": ["self", "https://reviewer-book.pockethost.io"],
      },
    }
	}
};

export default config;
