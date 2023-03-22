// process the request for a list of topics associated with a subject here

export async function load({ params, locals }) {
  locals.pb.collection("topics").getList(undefined, undefined, { filter: `id=${params.subject}` })
}