export const ssr = true;
import { fail, error } from "@sveltejs/kit"
// process the request for a list of topics associated with a subject here

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
  const subj = await locals.pb
    .collection("subjects")
    .getOne(params.id, {
      expand: "field",
    })
    .catch(err => {
      /** @type { { response: { code: number, message: string, } } } */
      const typederr = err;
      throw error(typederr.response.code, `Sorry: ${typederr.response.message}`)
    })

  if (!subj || !subj.expand.field) {
    return { topics: [] }
  }

  return { 
    topics: subj.expand.field.map((/** @type {any} */ c) => {
      const url = locals.pb.getFileUrl(c, c.thumbnail);
      return {
        name: c.name,
        description: c.description,
        thumbnail: url,
        topic_id: c.id,
        subject_id: params.id
      }
    }),
  }
}

/** @type {import("@sveltejs/kit").Actions} */
export const actions = {
  add: async ({ request, locals, params }) => {
    if (params.id === undefined) {
      return fail(422, {
        error: "Error: params is undefined."
      })
    }

    const req = await request.formData();

    try {
      const topic = await locals.pb
        .collection("topics")
        .create(req);

      const subj = await locals.pb
        .collection("subjects")
        .getOne(params.id)

      await locals.pb
        .collection("subjects")
        .update(params.id, { "field": [...subj.field, `${topic.id}`] })
      
    } catch (/** @type any */ err) {
      /** @type {{ response: { message: string | undefined, data: any } }} */
      const typederr = err;
      
      return fail(422, {
        error: `${typederr.response.message}: ${JSON.stringify(typederr.response.data)}`,
      })
    }
  },
  remove: async ({ request, locals, params }) => {
    if (params.id === undefined) {
      return fail(422, {
        error: "Error: params is undefined."
      })
    }

    const form = await request.formData();
    const topic_id = form.get("id")?.toString();
    
    if (topic_id) {
      const topic = await locals.pb
        .collection("topics")
        .getOne(topic_id);

      // get the linked content and delete them:
      for (const content_id of topic.content) {
        await locals.pb
          .collection("contents")
          .delete(content_id)
      }

      await locals.pb
        .collection("topics")
        .delete(topic_id);
    }
  }
}