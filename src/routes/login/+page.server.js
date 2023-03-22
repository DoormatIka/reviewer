import { redirect } from "@sveltejs/kit"

// if the user is already logged in, redirect them back.
/** @type {import("@sveltejs/kit").ServerLoad} */
export function load({ locals }) {
  if (locals.pb.authStore.isValid) {
    throw redirect(303, "/");
  }
}

/** @type {import("@sveltejs/kit").Actions} */
export const actions = {
  login: async ({ request, locals }) => {
    const form = await request.formData();
    const email = form.get("email");
    const pw = form.get("password");
    // console.log(email, pw)
    if (!email || !pw) return { error: true, reason: "Did you type in your email and password?" }

    try {
      const { token, record } = await locals.pb
        .collection("users")
        .authWithPassword(email.toString(), pw.toString())
      
    } catch (/** @type any */ err) {
      // passing the value back to the form
      /** @type { { originalError: { cause: { errno: number, code: string } } } } */
      const typederr = err;

      return {
        error: true,
        email: email,
        code: typederr.originalError.cause.code
      }
    }
    throw redirect(303, "/")
  }
}