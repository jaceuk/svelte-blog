<script context="module" lang="ts">
  interface IParams {
    params: IParam;
  }
  interface IParam {
    slug: string;
  }
  interface IPostData {
    post: any;
    slug: string | null;
  }

  const slugFromPath = (path: string) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
  const allPosts = import.meta.globEager('../../posts/*.md');

  let posts: [] = [];
  // Get the posts' slugs
  for (let path in allPosts) {
    const post = allPosts[path];
    const slug = slugFromPath(path);
    const postData: IPostData = { post, slug };
    posts.push(postData);
  }

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
  import PostMeta from '@components/PostMeta.svelte';

  export let page: any, meta: any;
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.excerpt} />
</svelte:head>

<div class="inner">
  <div class="narrowContainer">
    <div class="row">
      <Card>
        <div class="card-inner">
          <h1>{meta.title}</h1>
          <PostMeta date={meta.date} tags={meta.tags} />
          <svelte:component this={page} />
        </div>
      </Card>
    </div>
  </div>
</div>

<style type="scss">
  .inner {
    margin-top: calc(var(--size-extra-large) * -2);
    padding-bottom: var(--size-extra-large);
    background: url('../../images/vader.png') no-repeat right bottom;
  }

  .card-inner {
    padding: var(--size-medium);
    display: flex;
    gap: var(--size-medium);
    flex-direction: column;

    @media (max-width: 900px) {
      padding: 0;
      gap: var(--size-base);
    }
  }

  .narrowContainer {
    padding: 0 var(--size-extra-large);

    @media (max-width: 1000px) {
      padding: 0 var(--size-large);
    }

    @media (max-width: 767px) {
      padding: 0;
    }
  }
</style>
