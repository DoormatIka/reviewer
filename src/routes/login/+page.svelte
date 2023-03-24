<script>
  export let form;
</script>

<div class="mx-5 h-screen w-screen flex flex-col justify-center items-center">
  <div class="p-10 shadow-md rounded-xl bg-white text-center">
    <div class="break-words gap-4 m-3">
      <form method="post" action="?/login" class="flex flex-col gap-3 items-center justify-center">
        <h2 class="p-5">Admin Login</h2>
        <label>
          Email
          <input name="email" type="email" value={form?.email ?? ""}>
        </label>
        <label>
          Password
          <input name="password" type="password" value={form?.pw ?? ""}>
        </label>
        <button>Log in</button>
        {#if form?.error}
          <p class=" text-red-500">{form?.error}</p>
        {/if}
      </form>
    </div>

    <p>Why have this?</p>
    <div class="text-xs text-slate-400">
      <p>For the admins to have an easier time to modify the internals of the website.</p>
    </div>
  </div>
</div>