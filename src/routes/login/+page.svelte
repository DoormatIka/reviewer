<script>
  export let form;
</script>
<div class="h-screen w-screen bg-black">
  <div class="p-4 h-screen w-screen flex flex-col justify-center items-center font-IBM">
    <div class="p-10 shadow-none bg-black text-center text-white shadow-transparent border hover:shadow-xl hover:shadow-teal-200 transition-all ease-out duration-700">
      <div class="break-words gap-4 m-3">
        <form method="post" action="?/login" class=" flex flex-col gap-3 items-center justify-center">
          <h2 class="p-5 font-IBM font-semibold text-3xl">Admin <span class="text-teal-200">Login</span></h2>
          <label class=" w-2/3">
            Email
            <input class="text-black bg-white w-full" name="email" type="email" value={form?.email ?? ""}>
          </label>
          <label class=" w-2/3">
            Password
            <input class="text-black bg-white w-full" name="password" type="password" value={form?.pw ?? ""}>
          </label>
          <button class=" text-emerald-200 font-IBM hover:text-emerald-400 text-lg px-2 py-1 transition-all ease-linear duration-100">Log in</button>
          {#if form?.error}
            <p class=" text-red-500">{form?.error}</p>
          {/if}
        </form>
      </div>
  
      <p>Why have this?</p>
      <div class="text-xs text-slate-400 w-1/2 m-auto">
        <p class="text-justify">For the admins to have an easier time to modify the internals of the website.</p>
      </div>
    </div>
  </div>
</div>