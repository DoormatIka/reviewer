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
    })
  }
}

/** @type {import("@sveltejs/kit").Actions} */
export const actions = {
  add: async ({ request, locals }) => {
    const req = await request.formData();

    const name = req.get("name");
    const desc = req.get("desc");
    const tag = req.get("tags");
    const link = req.get("link");
    const img = req.get("img");
    console.dir(img, { depth: null })
    try {
      if (desc && name) { // validation
        let err = "";
        if (desc.length < 5) {
          err = "description"
        }
        if (name.length < 5) {
          err = "name"
        }
        if (err.length > 0) {
          return fail(422, {
            error: `Invalid length of ${err}.`,
            name: name,
            desc: desc,
            tag: tag,
            link: link,
          })
        }
      }
      await locals.pb
        .collection("subjects")
        .create({
          name: name,
          description: desc,
          tag: tag,
          link: link,
          thumbnail: img
        })
      
      redirect(303, "/subjects")
    } catch (/** @type any */ err) {
      /** @type {{ response: { message: string } }} */
      const typederr = err;
      console.dir(err, { depth: null })
      return fail(422, {
        error: typederr.response.message,
        name: name,
        desc: desc,
        tag: tag,
        link: link,
      })
    }
  },
  remove: async ({ request, locals }) => {
    const form = await request.formData();
    const id = form.get("id")?.toString();
    
    if (id) {
      await locals
        .pb
        .collection("subjects")
        .delete(id);
    }
  }
}