import { serializeNonPOJOs } from '$lib/helper'

export function load({ locals }) {
  if (locals.user) {
    return {
      profile: serializeNonPOJOs(locals.user)
    }
  }
}