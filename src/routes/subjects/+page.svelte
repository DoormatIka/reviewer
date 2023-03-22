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
    {#each data.subjects as { tag, subject, description, link, imageLink }}
      <Subject 
        tag={tag} 
        subject={subject} 
        description={description} 
        imageLink={imageLink}
        link={link}
      ></Subject>
    {/each}
  {/if}

  <div>
    <form class="flex items-center flex-col" method="post">
      <button>Add Subject</button>
      {#if form}
        <p><span class="text-red-500">Error:</span> {form?.message}</p>
      {/if}
    </form>
  </div>
</div>