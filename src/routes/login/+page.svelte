<script>
  import { error } from "@sveltejs/kit";
  export let form;
</script>

<div class="mx-5 h-screen w-screen flex justify-center">
  <form method="post" action="?/login" class="flex flex-col gap-3 items-center justify-center flex-grow">
    <div class="group p-10 shadow-md rounded-xl bg-white flex-wrap">
      <div class="flex break-words justify-center items-center flex-col gap-4">
        <h2 class="p-5">Admin Login</h2>
        <label>
          Email
          <input name="email" type="email" required>
        </label>
        <label>
          Password
          <input name="password" type="password" required>
        </label>
        <button>Log in</button>
        {#if form?.error}
          <p>{form?.code}</p>
        {/if}
      </div>
    </div>
      
  </form>
</div>