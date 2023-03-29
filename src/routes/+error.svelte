<script>
  import { page } from "$app/stores";
</script>

<div class="flex flex-col justify-center items-center mt-10">
  <img src="/sorry.jpg" alt="Sorry" class="h-96" />

  <h1>Sorry</h1>
  <div>
    <p>{$page.error?.message}</p>
  </div>
</div>