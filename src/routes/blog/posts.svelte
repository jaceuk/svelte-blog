<script context="module" lang="ts">
  interface IFetch {
    fetch: any;
    url: any;
  }

  export async function load({ fetch, url }: IFetch) {
    const page = parseInt(url.searchParams.get('page') !== null ? url.searchParams.get('page') : '1');
    const response = await fetch(`/api/posts.json?page=${page}`);
    const posts = await response.json();

    return {
      status: response.status,
      props: {
        posts: posts,
        page: page,
      },
    };
  }
</script>

<script lang="ts">
  import Posts from '@components/Posts.svelte';
  import Pagination from '@components/Pagination.svelte';

  export let posts: any;
  export let page: number;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<Posts {posts} />
<Pagination {page} />

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
