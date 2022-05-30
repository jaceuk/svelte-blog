<script context="module" lang="ts">
  interface IParams {
    params: IParam;
  }

  interface IParam {
    slug: string;
  }

  const slugFromPath = (path: string) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

  const allPosts = import.meta.globEager('../../posts/*.md');

  interface IPostData {
    post: any;
    slug: string | null;
  }

  let posts: [] = [];
  // Get the posts' slugs
  for (let path in allPosts) {
    const post = allPosts[path];
    const slug = slugFromPath(path);
    const postData: IPostData = { post, slug };
    posts.push(postData);
  }

  /** @type {import('./__types/[baz]').Load} */
  export function load({ params }: IParams) {
    const { slug } = params;

    // Find the post with the slug
    const filteredPost: any = posts.find((post: any) => {
      return post.slug.toLowerCase() === slug.toLowerCase();
    });

    return {
      props: {
        meta: filteredPost.post.metadata,
        page: filteredPost.post.default,
      },
    };
  }
</script>

<script lang="ts">
  import Card from '@components/Card.svelte';

  export let page: any, meta: any;
</script>

<svelte:head>
  <title>{meta.title}</title>
</svelte:head>

<div class="inner">
  <div class="narrowContainer">
    <div class="row">
      <Card>
        <p>{meta.date}</p>
        <h1>{meta.title}</h1>
        <svelte:component this={page} />
      </Card>
    </div>
  </div>
</div>

<style type="scss">
  .inner {
    margin-top: calc(var(--size-extralarge) * -2);
    padding-bottom: var(--size-extralarge);
    background: url('../../images/vader.png') no-repeat right bottom;
    display: flex;
    gap: var(--size-medium);
    flex-direction: column;
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
</style>
