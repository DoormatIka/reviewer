import Pocketbase from "pocketbase";
import { base } from "$app/paths";

/** @type {import("@sveltejs/kit").Handle} */
export async function handle({ event, resolve }) {
  event.locals.pb = new Pocketbase("https://reviewer-book.pockethost.io");
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");

  try {
    if (event.locals.pb.authStore.isValid) {
      if (event.locals.pb.authStore.model) {
        event.locals.user = event.locals.pb.authStore.model
      }
    }
    await event.locals.pb.collection('users').authRefresh()
  } catch (_) {
    event.locals.pb.authStore.clear();
  }

  const response = await resolve(event);
  
  // TODO: secure before deployment
  
  response.headers.append("set-cookie", event.locals.pb.authStore.exportToCookie({ secure: true, maxAge: 86400, path: `/` }));
  return response;
}