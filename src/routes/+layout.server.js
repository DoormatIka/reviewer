import { serializeNonPOJOs } from '$lib/helper'

/** @type {import("@sveltejs/kit").ServerLoad} */
export async function load({ locals }) {
  if (locals.user) {
    return {
      profile: serializeNonPOJOs(locals.user),
      isLoggedIn: locals.pb.authStore.isValid
    }
  }
}