<script>
  /** @type {import("./$types").PageData} */
  export let data;
  export let form;

  import Card from "$lib/Card.svelte";
  import { base } from "$app/paths";
</script>

<div class="flex flex-col items-center justify-center align-items p-5">
  <h2 class="mb-10">Topics</h2>

  <div class="grid grid-cols-2 grid-rows-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
    {#each data.topics as { name, description, thumbnail, topic_id, subject_id }}
      <Card>
        <img src={thumbnail} alt="" class=" max-h-64 md:max-h-32 object-contain" />
        <h3>{name}</h3>
        <p>{description}</p>
        <a href="{base}/subjects/{subject_id}/{topic_id}">Enter</a>
        {#if data.isLoggedIn}
          <form method="post" action="?/remove">
            <input type="hidden" name="id" value={topic_id} />
            <button>Remove</button>
          </form>
        {/if}
      </Card>
    {/each}
  </div>

  {#if data.isLoggedIn}
    <div class="mt-5">
      <form enctype="multipart/form-data" method="post" action="?/add" class="flex items-center flex-col gap-3">
        <label>
          Name <input type="text" name="name" required>
        </label>
        <label>
          Description <input type="text" name="description" required>
        </label>
        <label>
          Thumbnail <input type="file" name="thumbnail" accept="image/jpeg,image/png" required>
        </label>

        <button type="submit">Add Topic</button>
        {#if form}
          <p><span class="text-red-500">Error: </span> {form.error}</p>
        {/if}
      </form>
    </div>
  {/if}
</div>