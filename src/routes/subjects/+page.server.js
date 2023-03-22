
export async function load({ locals }) {
  const list = await locals.pb
    .collection("subjects")
    .getList();
  
  console.log(list.items);

  // somehow identify the subject link from this
  // and take it to the route params load function
  // so it can be used to get the topics associated with that subj
  return {
    subjects: list.items.map(v => {
      return {
        subject: v.name,
        description: v.description,
        tag: v.tag,
        link: v.id
      }
    })
  }
}