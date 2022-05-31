<script context="module" lang="ts">
  import { tag } from '@lib/stores';
  import { formatForDisplay } from '@lib/utils/tags';

  interface IParam {
    tag: string;
  }
  interface IFetch {
    fetch: any;
    params: IParam;
    url: any;
  }

  const PAGE_SIZE = 4;

  export async function load({ fetch, params, url }: IFetch) {
    const page = parseInt(url.searchParams.get('page') !== null ? url.searchParams.get('page') : '1');
    const tagParam = params.tag;
    const formattedTag = formatForDisplay(tagParam);
    tag.set(formattedTag);
    const response = await fetch(`/api/posts.json?page=${page}&size=${PAGE_SIZE}&tag=${formattedTag}`);
    const posts = await response.json();

    return {
      status: response.status,
      props: {
        posts: posts,
        page: page,
        pageSize: PAGE_SIZE,
        tagParam: tagParam,
      },
    };
  }
</script>

<script lang="ts">
  import Posts from '@components/Posts.svelte';

  export let posts: any;
  export let page: number;
  export let tagParam: string;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<Posts {posts} />

<div>
  {#if page > 1}
    <a href={`/tag/${tagParam}?page=${page - 1}`}>back</a>
  {/if}
  {#if posts.length === PAGE_SIZE}
    <a href={`/tag/${tagParam}?page=${page + 1}`}>next</a>
  {/if}
</div>
