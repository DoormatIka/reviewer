<script>
  import { base } from "$app/paths";
  const logo =
    "https://media.discordapp.net/attachments/1061320413373808741/1085617532804812970/favicon.png?width=560&height=560";
  
  const socials = [
    { name: "Twitter", link: "https://twitter.com/LilynHana" },
    { name: "Github", link: "https://github.com/DoormatIka" },
    { name: "YouTube", link: "https://www.youtube.com/channel/UCtAtFodHMODWTBfbquris5Q" }
  ]
  export let data;
</script>

<div class="mx-5 flex justify-center items-center flex-col gap-5">
  <div
    class="group
      sm:flex sm:items-center sm:flex-col sm:gap-1
      duration-150 p-7 shadow-md rounded-xl mt-10 bg-white
    "
  >
    <img
      class=" sm:h-36 group-hover:-translate-y-3 group-hover:-translate-x-1 group-hover:-rotate-3 delay-75 transition-all duration-300 h-48 block mb-5 ease-snap"
      src={logo}
      alt="Logo Icon"
    />
    <div>
      <h3 class="py-3">
        A Grade 12 resource website for
        <span
          class="group-hover:text-yellow-400 inline-block group-hover:rotate-3 group-hover:translate-x-1 transition-all duration-200 ease-snap"
        >
          UST
        </span>
        <span
          class="group-hover:text-yellow-400 inline-block group-hover:-rotate-6 group-hover:translate-x-2 transition-all duration-200 ease-snap"
        >
          students.
        </span>
      </h3>
      <div class="p-2 text-xs text-slate-400">
        <p class="mb-2">Technologies to use:</p>
        <p>Frontend: SvelteKit, TailwindCSS, and HTML, CSS, JS. ;)</p>
        <p>Backend: Pocketbase (Lightweight database)</p>
        <p>Hosting Frontend: Netlify</p>
        <p>Hosting Backend: Pockethost :heart:</p>
      </div>
    </div>
  </div>

  {#if data.code !== -1}
    <div class="mt-5">
      <a
        href="{base}/subjects"
        class="px-20 p-5 border 
            bg-white border-blue-200 hover:border-blue-500 
            transition-colors duration-300 shadow-md rounded-md
            group
          "
      >
        <span
          class="inline-block group-hover:tracking-widest group-hover:-translate-x-1 transition-all ease-snap"
        >
          View
        </span>
        <span
          class="inline-block group-hover:tracking-widest group-hover:translate-x-3 transition-all ease-snap"
        >
          Subjects
        </span>
      </a>
    </div>
  {/if}

  <div class="group mt-5 flex items-center justify-between shadow-md hover:shadow-lg shadow-teal-300 hover:shadow-teal-300 gap-10 p-6 font-mono text-white bg-black transition-all duration-1000">
    <div class="w-40 h-40 relative before:absolute before:bg-teal-300 before:top-1 before:group-hover:top-2 before:left-1 before:group-hover:left-2 before:w-full before:h-full before:transition-all before:duration-150 before:ease-linear">
      <img src="akyuu.jpg" alt="" class="w-full h-full absolute inset-0 z-10 object-cover" />
    </div>
    <div>
      <p class="font-semibold text-2xl text-center tracking-wider p-3">Made by <span class="text-teal-400">Alice</span></p>
    
      <div class="flex flex-col items-center pl-5 pr-5 justify-center border border-slate-200 flex-1 p-3">
        <p class="font-semibold text-xl">Socials</p>
        {#each socials as { name, link }}
        <a href={link} class="text-emerald-400 group-hover:text-cyan-300 transition-all ease-linear duration-300 font-mono" target="_blank" rel="noopener noreferrer">
          {name}
        </a>
        {/each}
      </div>
    </div>
  </div>

  <div class="mt-2 shadow-md p-5 rounded-md">
    {#if data.code === -1}
      <p class="text-red-600 text-center">{data.message}</p>
    {:else}
      <p class="text-green-400 text-center">{data.message}</p>
      <div class="mt-5 text-center">
        <p>Logged in as: {data.profile?.username}</p>
        <a href="{base}/login"> Admin Login </a>
        <form action="/logout" method="post">
          <button class=" text-blue-500">Logout</button>
        </form>
      </div>
    {/if}
  </div>
</div>

<!-- PLEASE DO BRUTALISM FROM TAILWINDCSS' WEBSITE PLEASE THEME IT AROUND IT -->
<!-- ADAPT IT INTO A WINDOWS 95 LIKE EXPERIENCE -->