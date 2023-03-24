<script>
  import Modal from "$lib/Modal.svelte";
  import Component1 from './Component1.svelte'
  let showModal = false;
  
  /**
     * @type {any}
     */
  let modalContent;

  /**
     * @param {any} component
     */
  function toggleModal(component) {
		modalContent = component;
		showModal = !showModal;
	}
</script>

<button on:click={() => (toggleModal(Component1))}>
	Open 1
</button>

{#if showModal}
  <Modal on:click={toggleModal} modal={modalContent} />
{/if}