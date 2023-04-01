<script>
  import Subject from "./Subject.svelte";

  /** @type {import("./$types").PageData} */
  export let data;
  export let form;
</script>

<div class="m-5">
  <h1 class="flex flex-col items-center p-5">Subjects</h1>
  
  {#if data.subjects.length < 1}
    <p class="flex flex-col items-center p-5">Nothing yet.</p>
  {:else}
    {#each data.subjects as { tag, subject, description, id, imageLink }}
      <Subject 
        tag={tag} 
        subject={subject} 
        description={description} 
        imageLink={imageLink}
        link={id}
      >
        {#if data.isLoggedIn}
          <form method="post" action="?/remove">
            <input type="hidden" name="id" value={id} />
            <button>Remove</button>
          </form>
        {/if}
      </Subject>
    {/each}
  {/if}

  {#if data.isLoggedIn}
    <div>
      <form enctype="multipart/form-data" method="post" action="?/add" class="flex items-center flex-col gap-3 justify-between">
        <label>
          Name
          <input name="name" class="border rounded-md border-slate-400 outline-none p-1" type="text" required />
        </label>
        <label class="text-center">
          <p>Description</p>
          <textarea name="description" cols="30" rows="5"></textarea>
        </label>
        <label>
          Tags
          <select name="tag" id="tags" required>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="Language">Language</option>
            <option value="Others">Others</option>
          </select>
        </label>
        <label>
          Link
          <input name="link" class="border rounded-md border-slate-400 outline-none p-1" type="text" required />
        </label>
        <label>
          Image
          <input type="file" name="thumbnail" accept="image/jpeg,image/png" required />
        </label>

        <button type="submit">Add Subject</button>
        {#if form}
          <p><span class="text-red-500">Error:</span> {form?.error}</p>
        {/if}
      </form>
    </div>
  {/if}
</div>