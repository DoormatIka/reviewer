import { fail, error } from "@sveltejs/kit"

export async function load({ params, locals }) {
  const topic = await locals.pb
    .collection("topics")
    .getOne(params.topicid, {
      expand: "content"
    }) // 
    .catch(err => {
      /** @type { { response: { code: number, message: string, } } } */
      const typederr = err;
      throw error(typederr.response.code, `Sorry: ${typederr.response.message}`)
    })

  if (!topic || !topic.expand.content) {
    return { contents: [] }
  }

  return {
    contents: topic.expand.content.map((/** @type {any} */ c) => {
      const url = locals.pb.getFileUrl(c, c.image);
      return {
        description: c.description,
        image: url,
        id: c.id
      }
    })
  }
}

export const actions = {
  add: async ({ request, locals, params }) => {
    const req = await request.formData()

    try {
      const content = await locals.pb
        .collection("contents")
        .create(req)

      const topic = await locals.pb
        .collection("topics")
        .getOne(params.topicid)
      
      await locals.pb
        .collection("topics")
        .update(params.topicid, { "content": [...topic.content, `${content.id}`] })
    } catch (/** @type {any} */ err) {
      /** @type {{ response: { message: string | undefined, data: any } }} */
      const typederr = err;

      return fail(422, {
        error: `${typederr.response.message}: ${JSON.stringify(typederr.response.data)}`,
      })
    }
  },
  remove: async ({ request, locals, params }) => {
    const form = await request.formData();
    const content_id = form.get("id")?.toString();

    if (content_id) {
      await locals.pb
        .collection("contents")
        .delete(content_id)
    }
  }
}