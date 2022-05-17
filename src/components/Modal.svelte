<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import MdClose from 'svelte-icons/md/MdClose.svelte';
  import { focusTrap } from 'svelte-focus-trap';
  import Overlay from '@components/Overlay.svelte';

  export let image: string;

  const dispatch = createEventDispatcher();

  function handleClose() {
    dispatch('close');
  }
</script>

<Overlay>
  <div class="imageContainer" use:focusTrap>
    <button class="close" on:click={handleClose}>
      <div class="icon">
        <MdClose />
      </div>
    </button>
    <img class="image" src="src/images/{image}" alt="" />
  </div>
</Overlay>

<style lang="scss">
  .image {
    border-radius: var(--border-radius-medium);
    max-height: calc(100vh - 2 * var(--size-base));
  }

  .imageContainer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    max-width: calc(100% - 2 * var(--size-base));
    transform: translateY(0.01%);
    animation: mmslideIn 0.4s ease-in-out;

    @keyframes mmslideIn {
      from {
        transform: translateY(5%);
      }

      to {
        transform: translateY(0);
      }
    }
  }

  .close {
    position: absolute;
    top: calc(var(--size-base) * -1);
    right: calc(var(--size-base) * -1);
    border-radius: var(--border-radius-max);
    padding: var(--size-base);
    cursor: pointer;
  }

  .icon {
    height: 24px;
    min-width: 24px;
  }
</style>
