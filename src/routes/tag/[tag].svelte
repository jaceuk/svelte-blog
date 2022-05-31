<script context="module" lang="ts">
  import { tag } from '@lib/stores';
  import { formatForURL, formatForDisplay } from '@lib/utils/tags';

  interface IParam {
    tag: string;
  }
  interface IFetch {
    fetch: any;
    params: IParam;
  }

  export async function load({ fetch, params }: IFetch) {
    const response = await fetch('/api/posts.json');
    const posts = await response.json();
    const tagParam = params.tag;
    const formattedTag = formatForDisplay(tagParam);

    tag.set(formattedTag);

    const filteredPosts = posts.filter((post: any) => {
      return post.tags.includes(formattedTag);
    });

    return {
      status: response.status,
      props: {
        posts: filteredPosts,
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
