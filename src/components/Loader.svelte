<script lang="ts">
  import { Diamonds } from 'svelte-loading-spinners';
</script>

<div class="container">
  <Diamonds size={80} color="#FFFFFF" />
  <slot />
  <Diamonds size={80} color="#FFFFFF" />
</div>

<style lang="scss">
  .container {
    display: flex;
    gap: var(--size-medium);
    align-items: center;
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);
    margin: var(--size-base);
    color: var(--color-white);
    text-align: center;

    @media (max-width: 767px) {
      flex-direction: column;
      padding: var(--size-base);
      border-radius: var(--border-radius-medium);
      font-size: var(--font-size-medium);
    }
  }
</style>
