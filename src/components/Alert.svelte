<script lang="ts">
  import MdCheckCircle from 'svelte-icons/md/MdCheckCircle.svelte';
  import MdError from 'svelte-icons/md/MdError.svelte';

  export let type: string;
</script>

<div class="container {type}" role={type === 'error' ? 'alert' : undefined}>
  <div class="icon-container">
    {#if type === 'success'}
      <MdCheckCircle />
    {/if}

    {#if type === 'error'}
      <MdError />
    {/if}
  </div>
  <div class="text-container"><slot /></div>
</div>

<style lang="scss">
  .container {
    display: flex;
    gap: var(--size-base);
    align-items: flex-start;
    font-weight: var(--font-weight-bold);
    padding: var(--size-base);
    color: var(--color-white);
    border-radius: var(--border-radius-medium);

    &.success {
      background-color: var(--color-lighthousegoodpale);
      color: var(--color-lighthousegooddark);

      .icon-container {
        color: var(--color-lighthousegooddark);
      }
    }

    &.error {
      background-color: var(--color-lighthousepoorpale);
      color: var(--color-lighthousepoordark);

      .icon-container {
        color: var(--color-lighthousepoordark);
      }
    }

    .icon-container {
      height: 40px;
      min-width: 40px;
    }

    .text-container {
      min-height: 40px;
      display: flex;
      align-items: center;
    }
  }
</style>
