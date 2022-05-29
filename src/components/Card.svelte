<script lang="ts">
  import { fly } from 'svelte/transition';
  import { sineOut } from 'svelte/easing';
  import { inview } from 'svelte-inview';

  let isInView: boolean;

  const options = {
    unobserveOnEnter: true,
  };

  interface IProps {
    detail: any;
  }

  const handleEnter = ({ detail }: IProps) => {
    isInView = detail.inView;
  };
</script>

<div use:inview={options} on:enter={handleEnter} class="container">
  {#key isInView}
    <div class="card" in:fly={{ y: 50, duration: 800, easing: sineOut }}>
      <slot />
    </div>
  {/key}
</div>

<style lang="scss">
  .container {
    height: 100%;
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: var(--size-medium);
    background: var(--color-white);
    border-radius: var(--border-radius-large);
    padding: var(--size-medium);
    box-shadow: 0px 3px 24px var(--color-nearlyblack20);
    height: 100%;

    @media (max-width: 767px) {
      padding: var(--size-base);
      border-radius: var(--border-radius-medium);
    }
  }
</style>
