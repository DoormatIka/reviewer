<script>
  /** @type {import("./$types").PageData} */
  export let data;
</script>

<p>{data.post?.description}</p>
<p>Note to the dev: Transfer the data.js file into a database.</p>

{#each data.post?.topics as { topic, description }}
  <div class="bg-slate-300">
    <h3>{topic}</h3>
    <p>{description}</p>
    <br>
  </div>
{/each}