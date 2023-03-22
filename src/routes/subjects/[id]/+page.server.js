// process the request for a list of topics associated with a subject here

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
  const subj = await locals.pb
    .collection("subjects")
    .getOne(params.id)

  const conditions = subj.field.map((/** @type {string} */ id) => {
    return `id = "${id}"`
  });

  if (!(conditions.length < 1)) {
    const topics = await locals.pb
      .collection("topics") 
      .getList(undefined, undefined, {
        filter: conditions.join("||") 
      })
    
    return {
      topics: topics.items.map(c => {
        return { name: c.name, description: c.description };
      })
    }
  }
  return { topics: [] }
}