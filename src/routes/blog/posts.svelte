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
        posts: posts.posts,
        postCount: posts.postCount,
        page: page,
      },
    };
  }
</script>

<script lang="ts">
  import Posts from '@components/Posts.svelte';
  import Header from '@components/Header.svelte';
  import BlogTitle from '@components/BlogTitle.svelte';

  export let posts: any;
  export let page: number;
  export let postCount: number;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<Header>
  {#if page === 1}<BlogTitle />{/if}
</Header>

<Posts {posts} {page} {postCount} />
