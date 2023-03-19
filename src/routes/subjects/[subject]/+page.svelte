<script>
  /** @type {import("./$types").PageData} */
  export let data;

  import Card from "$lib/Card.svelte";
  const logo = "https://media.discordapp.net/attachments/759258063789096973/1085893022534864967/IMG_20230316_194326.jpg?width=507&height=675";
</script>

<p>{data.post?.description}</p>
<p>Note to the dev: Transfer the data.js file into a database.</p>

<div class="flex justify-center align-items p-5">
  <div class="grid grid-cols-2 grid-rows-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
    {#each data.post?.topics as { topic, description }}
      <Card>
        <img src={logo} alt="" class=" max-h-32 object-contain" />
        <h3>{topic}</h3>
        <p>{description}</p>
      </Card>
    {/each}
  </div>
</div>