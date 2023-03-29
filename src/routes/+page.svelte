<script>
  import { base } from "$app/paths";
  const logo =
    "https://media.discordapp.net/attachments/1061320413373808741/1085617532804812970/favicon.png?width=560&height=560";
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

      <p>
        Made by <span
          class="group-hover:text-yellow-700 transition-colors duration-200"
          >alice-.</span
        >
      </p>
      <div class="p-2 text-xs text-slate-400">
        <p>Technologies to use:</p>
        <p>Frontend: SvelteKit, TailwindCSS, and HTML, CSS, JS. ;)</p>
        <p>Backend: Pocketbase (to store modules).</p>
        <p>Hosting: DigitalOcean or Github Pages.</p>
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

  <div class="mt-5">
    <p class="text-center">Socials:</p>
    <a href="https://twitter.com/LilynHana">Twitter</a>
    <a href="https://www.facebook.com/simon.rito.7">Facebook</a>
  </div>

  <div class="mt-2 shadow-md p-5 rounded-md">
    {#if data.code === -1}
      <p class="text-red-600 text-center">{data.message}</p>
    {:else}
      <p class="text-green-400 text-center">{data.message}</p>
      <div class="mt-5 text-center">
        {#if data.profile}
          <p>Logged in as: {data.profile.username}</p>
          <form action="/logout" method="post">
            <button class=" text-blue-500">Logout</button>
          </form>
        {:else}
          <p>Logged out.</p>
          <a href="{base}/login"> Admin Login </a>
        {/if}
      </div>
    {/if}
  </div>
</div>
