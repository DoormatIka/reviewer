<script>
  /** @type {import("./$types").PageData} */
  export let data;
</script>

<p>{data.post?.description}</p>
<p>Note to the dev: Transfer the data.js file into a database.</p>

<div class="flex justify-center">
  <div class="grid grid-cols-2 grid-rows-2 sm:grid-cols-3 md:grid-cols-4">
    {#each data.post?.topics as { topic, description }}
      <div class="
        sm:flex sm:items-center sm:flex-col sm:gap-1
        p-7 shadow-md rounded-xl bg-white
      ">
        <h3>{topic}</h3>
        <p>{description}</p>
      </div>
    {/each}
  </div>
</div>