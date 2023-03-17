<script>
  import Subject from "./Subject.svelte";
  /** @type {import("./$types").PageData} */
  export let data;
</script>

<div class="">
  <div class="flex justify-center items-center flex-col mt-10">
    <h2 class="">Subjects</h2>
  </div>
  
  {#each data.subjects as { tag, subject, description, imageLink }}
    <Subject tag={tag} subject={subject} description={description} imageLink={imageLink}></Subject>
  {/each}
</div>