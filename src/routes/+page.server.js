// export const prerender = true;
export const ssr = true;
export const trailingSlash = 'always';

/** @type {import("@sveltejs/kit").ServerLoad} */
export async function load({ locals }) {
  try {
    const hp = await locals.pb.health.check()
    return {
      code: hp.code,
      message: hp.message,
      isLoggedIn: locals.pb.authStore.isValid
    }
  } catch (err) {
    return {
      code: -1,
      message: "API is down.",
      isLoggedIn: locals.pb.authStore.isValid
    }
  }
}