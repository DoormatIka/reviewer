import { serializeNonPOJOs } from '$lib/helper'

/** @type {import("@sveltejs/kit").ServerLoad} */
export async function load({ locals }) {
  if (locals.user) {
    console.log(locals.pb.authStore.isValid)
    return {
      profile: serializeNonPOJOs(locals.user),
      isLoggedIn: locals.pb.authStore.isValid
    }
  }
}