<script>
  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  /**
     * @type {any}
     */
   export let modal;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div 
  on:click|self 
  class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
  style="background-color:rgba(0, 0, 0, 0.4)"
  transition:fade={{ duration: 100, easing: quintOut }}
>
  <div class="bg-slate-50 p-3 rounded-lg">
    <svelte:component on:click this={modal} />
  </div>
</div>