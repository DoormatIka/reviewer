<script>
  const logo = "https://media.discordapp.net/attachments/1061320413373808741/1085617532804812970/favicon.png?width=560&height=560";
</script>

<div class="flex items-center justify-center p-5">
  <img src="{logo}" width="200" alt="Logo Icon" />
  <div class="flex flex-col items-center">
    <h3>A Grade 12 resource website for USTL Students.</h3>
    <p>Made by alice-.</p>
    <div class="p-2">
      <p class="text-xs">Technologies used:</p>
      <p class="text-xs">Frontend: SvelteKit, TailwindCSS, and HTML, CSS, JS. ;)</p>
      <p class="text-xs">Backend: Pocketbase (to store modules).</p>
      <p class="text-xs">Hosting: DigitalOcean or Github Pages.</p>
    </div>
  </div>
</div>
<br><br><br>
<div class="p-2">
  <ul>
    {#each Array(5) as _, index (index)}
      <li>Protected</li>
    {/each}
  </ul>
</div>