export const ssr = true;
import { redirect, fail } from "@sveltejs/kit"

/** @type {import("@sveltejs/kit").ServerLoad} */
export async function load({ locals }) {
  const list = await locals.pb
    .collection("subjects")
    .getList();

    return {
      subjects: list.items.map(v => {
        const url = locals.pb.getFileUrl(v, v.thumbnail);
        return {
          subject: v.name,
          description: v.description,
          tag: v.tag,
          imageLink: url,
          id: v.id
        }
    }),
    isLoggedIn: locals.pb.authStore.isValid
  }
}

/** @type {import("@sveltejs/kit").Actions} */
export const actions = {
  add: async ({ request, locals }) => {
    const req = await request.formData();

    try {
      await locals.pb
        .collection("subjects")
        .create(req)
      
      redirect(303, "/subjects")
    } catch (/** @type any */ err) {
      /** @type {{ response: { message: string, data: any } }} */
      const typederr = err;
      
      return fail(422, {
        error: `${typederr.response.message}: ${JSON.stringify(typederr.response.data)}`,
      })
    }
  },
  remove: async ({ request, locals }) => {
    const form = await request.formData();
    const id = form.get("id")?.toString();
    
    if (id) {
      const subj = await locals.pb
        .collection("subjects")
        .getOne(id)
      
      for (const field_id of subj.field) {
        const field = await locals.pb
          .collection("topics")
          .getOne(field_id)
        
          // copied from +page.server.js [id]
          // refractor, please.
          for (const content_id of field.content) {
            await locals.pb
              .collection("contents")
              .delete(content_id)
          }
    
          await locals.pb
            .collection("topics")
            .delete(field_id);
      }

      await locals.pb
        .collection("subjects")
        .delete(id)
    }
  }
}