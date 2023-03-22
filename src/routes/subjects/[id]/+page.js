import { posts } from "../data";
import { error } from "@sveltejs/kit"

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  // get the result from +page.server.js/[subject] and return it
  const post = posts.find((post) => post.link === params.id);

  if (!post) throw error(404, `Subject "${params.id}" is non-existent!`);
  
  return { post }
}