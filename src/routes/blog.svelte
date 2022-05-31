<script context="module" lang="ts">
  interface IFetch {
    fetch: any;
  }

  export async function load({ fetch }: IFetch) {
    const response = await fetch('/api/posts.json');
    const posts = await response.json();

    return {
      status: response.status,
      props: {
        posts: posts,
      },
    };
  }
</script>

<script lang="ts">
  import Posts from '@components/Posts.svelte';

  export let posts: any;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<Posts {posts} />

<style lang="scss">
  .inner {
    margin-top: calc(var(--size-extralarge) * -1);
    padding-bottom: var(--size-extralarge);
    background: url('../images/vader.png') no-repeat right bottom;
    display: grid;
    grid-auto-flow: row;
    grid-gap: var(--size-medium);
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .button {
    margin: auto auto 0 auto;
  }
</style>
