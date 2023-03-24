<script>
  /** @type {string} */
  export let tag;
  /** @type {string} */
  export let subject;
  /** @type {string} */
  export let description;
  /** @type {string} */
  export let imageLink;
  /** @type {string} */
  export let link;

  import { base } from "$app/paths";
</script>

<!-- To make the corners curved, use overflow-hidden! -->
<div
  class="group shadow-lg rounded-xl overflow-hidden mx-auto max-w-4xl bg-white md:flex sm:max-w-5xl m-5"
>
  <div class="md:shrink-0 overflow-hidden">
    <img
      src={imageLink}
      class="object-cover h-48 w-full md:object-center md:h-full md:w-48 scale-105 group-hover:scale-100 transition-transform duration-200 ease-out"
      alt=""
    />
  </div>

  <div class="flex md:flex-row flex-col flex-grow justify-between p-9">
    <div>
      <p class="text-sm text-yellow-500 tracking-wide">{tag}</p>
      <h4 class="leading-relaxed">{subject}</h4>
      <p class="mt-2 text-slate-600">{description}</p>
    </div>
    <div class=" flex flex-col mt-2 text-lg">
      <a href="{base}/subjects/{link}">Enter</a>
      <div class="mt-2">
        <slot />
      </div>
    </div>
  </div>
  
</div>
