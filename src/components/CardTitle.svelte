<script lang="ts">
  export let text: string;
  export let textSize: string;
</script>

<div class="container">
  <div class="icon-container"><slot name="icon" class="svg" /></div>

  {#if textSize === 'large'}
    <h2>{text}</h2>
  {:else}
    <h3>{text}</h3>
  {/if}
</div>

<style lang="scss">
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--size-base);
  }

  .icon-container {
    background: var(--color-nearlyblack);
    border-radius: var(--border-radius-max);
    padding: var(--size-base);
    height: 84px;
    min-width: 84px;
    color: var(--color-white);
  }
</style>
