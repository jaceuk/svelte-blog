<script context="module" lang="ts">
  interface ILoad {
    status: number;
    error: any;
  }

  export function load({ status, error }: ILoad) {
    return {
      props: {
        status,
        message: error.message,
      },
    };
  }
</script>

<script lang="ts">
  import Card from '@components/Card.svelte';
  import stormTroopers from '@images/404.jpg';

  export let status: number;
  export let message: string;
</script>

<div class="inner">
  <div class="narrowContainer">
    <Card>
      {#if status == 404}
        <h1>Error 404</h1>
        <h2>This is not the page you're looking for.</h2>
        <img class="image" src={stormTroopers} alt="" />
      {:else}
        <h1>Error 500</h1>
        <h2>This is not the error you're looking for.</h2>
        <p>There has been a problem on our side, please try again.</p>
        <img class="image" src={stormTroopers} alt="" />
      {/if}
    </Card>
  </div>
</div>

<style lang="scss">
  .inner {
    margin-top: calc(var(--size-extra-large) * -2);
    margin-bottom: calc(var(--size-medium) * -1);
  }

  .narrowContainer {
    padding: 0 var(--size-super);

    @media (max-width: 1000px) {
      padding: 0 var(--size-large);
    }

    @media (max-width: 767px) {
      padding: 0;
    }
  }

  .image {
    margin-bottom: calc(var(--size-medium) * -1);
  }
</style>
