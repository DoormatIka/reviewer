import { posts } from "../data";
import { error } from "@sveltejs/kit"

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const post = posts.find((post) => post.link === params.subject);

  if (!post) throw error(404, `Subject "${params.subject}" is non-existent!`);
  
  return { post }
}