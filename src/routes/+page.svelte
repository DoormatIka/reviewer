<script>
  import { base } from "$app/paths";
  const logo = "https://media.discordapp.net/attachments/1061320413373808741/1085617532804812970/favicon.png?width=560&height=560";
</script>

<div class="mx-5 flex justify-center items-center flex-col gap-5">
  <div class="group
      sm:flex sm:items-center sm:flex-col 
      transition-shadow duration-150 
      mx-auto max-w-2xl p-5 shadow-md rounded-xl mt-10
    ">
    <img class="group-hover:-translate-y-3 delay-75 transition-all duration-300 h-36 block mb-5" src="{logo}" alt="Logo Icon" />
    <div class="sm:text-left">
      <h3>
        A [||||||||||||||||||] resource website for 
          <span class="group-hover:text-yellow-400 transition-all duration-300">
            [|||||||] students.
          </span>
      </h3>
      <p>Made by alice-.</p>
      <div class="p-2 text-xs text-slate-400">
        <p>Technologies to use:</p>
        <p>Frontend: SvelteKit, TailwindCSS, and HTML, CSS, JS. ;)</p>
        <p>Backend: Pocketbase (to store modules).</p>
        <p>Hosting: DigitalOcean or Github Pages.</p>
      </div>
    </div>
  </div>

  <div class="mt-5">
    <a href="{base}/subjects" class="px-20 p-5 border border-blue-200 hover:border-blue-500 transition-colors duration-150 shadow-md rounded-md">View Subjects</a>
  </div>
</div>