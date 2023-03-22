<script>
  /** @type {import("./$types").PageData} */
  export let data;

  import Card from "$lib/Card.svelte";
  const logo = "https://media.discordapp.net/attachments/759258063789096973/1085893022534864967/IMG_20230316_194326.jpg?width=507&height=675";
</script>

<div class="flex flex-col items-center justify-center align-items p-5">
  <h2 class="mt-3">Topics</h2>

  <div class="grid grid-cols-2 grid-rows-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
    {#each data.topics as { name, description }}
      <Card>
        <img src={logo} alt="" class=" max-h-32 object-contain" />
        <h3>{name}</h3>
        <p>{description}</p>
      </Card>
    {/each}
  </div>
</div>