import { posts } from "./data"

/** @type {import('./$types').PageLoad} */
export function load({  }) {
  return {
    subjects: posts
  }
}