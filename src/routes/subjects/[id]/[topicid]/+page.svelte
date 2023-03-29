<script>
  import { error } from "@sveltejs/kit";
import SvelteMarkdown from "svelte-markdown"
  import { fade } from 'svelte/transition';
  const logo = "https://media.discordapp.net/attachments/951405390560653373/1089801005245411338/IMG_6919.jpg";
  export let data;
  export let form;
  let value = "";

  let index = 0;
  const next = () => {
    index = (index + 1) % data.contents.length
  }
  const previous = () => {
    if (index <= 0) {
      index = data.contents.length
    }
    index = index - 1
    console.log(index)
  }
</script>

<!-- Slideshow -->
<div class="overflow-y-hidden flex min-h-screen flex-col lg:flex-row">
  <div class=" overflow-y-hidden outline flex flex-auto lg:w-32 lg:h-auto p-3 justify-center flex-col lg:min-h-screen">
    <!-- Image part -->
    {#if data.contents.length > 0}
      {#each [data.contents[index]] as { image } (index)}
        <img src={image} alt="Custom" class="object-contain max-h-full self-center" />
      {/each}
    {/if}
  </div>
  <div class="outline flex-1 p-3 text-justify flex flex-col justify-between max-h-screen">
    <!-- Description -->
    <div class="overflow-y-auto text-lg lg:text-base">
      {#if data.contents.length > 0}
        {#each [data.contents[index]] as { description } (index)}
          <SvelteMarkdown source={description}></SvelteMarkdown>
        {/each}
      {/if}
      <div class="mt-3">
        {#if data.isLoggedIn}
          <div class="bg-slate-200 mt-10 break-all">
            <p class="mb-3">Preview:</p>
            <SvelteMarkdown source={value}></SvelteMarkdown>
          </div>
          <form class="flex flex-col items-center" enctype="multipart/form-data" method="post" action="?/add">
            <textarea name="description" cols="30" rows="10" bind:value={value} required></textarea>
            <input type="file" name="image" accept="image/jpeg,image/png" required>
            <button>Add new content</button>
          </form>
          {#if form?.error}
            <p><span class="text-red-500">Error:</span> {form?.error}</p>
          {/if}
        {/if}
      </div>
    </div>
    <div class="mt-2">
      <p transition:fade>Page {index + 1} of {data.contents.length}</p>        
      <button on:click={previous}>Previous</button>
      <button on:click={next}>Next</button>
    </div>
  </div>
</div>