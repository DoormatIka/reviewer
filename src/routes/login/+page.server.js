import { redirect, fail } from "@sveltejs/kit"

// if the user is already logged in, redirect them back.
/** @type {import("@sveltejs/kit").ServerLoad} */
export function load({ locals }) {
  /*
  if (locals.pb.authStore.isValid) {
    throw redirect(303, "/");
  }
  */
}

/** @type {import("@sveltejs/kit").Actions} */
export const actions = {
  login: async ({ request, locals }) => {
    const form = await request.formData();
    const email = form.get("email");
    const pw = form.get("password");

    try { // server-side validation
      if (email && pw) {
        const { token, record } = await locals.pb
          .collection("users")
          .authWithPassword(email.toString(), pw.toString())
      } else {
        return fail(422, {
          error: "Invalid inputs.",
          email: email,
          pw: pw,
        })
      }
      
    } catch (/** @type any */ err) {
      /** @type { { response: { code: number, message: String, data: any } } } */
      const typederr = err;

      return fail(422, {
        error: typederr.response.message,
        email: email,
        pw: pw,
      })
    }
    throw redirect(303, "/")
  }
}