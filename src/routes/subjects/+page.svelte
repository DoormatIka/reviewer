<script>
  import Subject from "./Subject.svelte";
  
  /** @type {import("./$types").PageData} */
  export let data;
</script>

<div class="">
  <div class="flex justify-center items-center flex-col mt-10">
    <h1 class="">Subjects</h1>
  </div>
  
  {#each data.subjects as { tag, subject, description, imageLink, link }}
    <Subject 
      tag={tag} 
      subject={subject} 
      description={description} 
      imageLink={imageLink} 
      link={link}
    ></Subject>
  {/each}
</div>