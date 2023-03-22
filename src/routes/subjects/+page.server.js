
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
        link: v.id
      }
    })
  }
}

/** @type {import("@sveltejs/kit").Actions} */
export const actions = {
  default: async ({ request, locals }) => {
    try {
      await locals.pb
        .collection("subjects")
        .create({
          name: "aaaawwwwwwwww",
          description: "wwwwwwwwwwwwwwwww",
          tag: "Science",
          link: "asdaf"
        })
    } catch (err) {
      return {
        message: "Have you logged in?"
      }
    }
  }
}