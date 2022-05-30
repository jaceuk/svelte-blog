<script context="module" lang="ts">
  interface IFetch {
    fetch: any;
  }

  /** @type {import('./__types/[baz]').Load} */
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
  import Card from '@components/Card.svelte';

  export let posts: any;
</script>

<div class="inner">
  {#each posts as post}
    <article>
      <Card>
        <h2>
          {post.title}
        </h2>
        <p>{post.excerpt}</p>
        <a href="blog/{post.slug}" class="button">Read more</a>
      </Card>
    </article>
  {/each}
</div>

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
