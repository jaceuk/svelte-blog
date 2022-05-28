<script context="module" lang="ts">
  interface IFetch {
    fetch: any;
  }

  export const load = async ({ fetch }: IFetch) => {
    const reponse = await fetch('/api/posts.json');
    const posts = await reponse.json();

    return {
      props: {
        posts: posts,
      },
    };
  };
</script>

<script lang="ts">
  import Card from '@components/Card.svelte';
  export let posts: any;

  console.log(posts);
</script>

<div class="inner">
  {#each posts as post}
    <Card>
      <h2>
        {post.title}
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor.</p>
      <a href="blog/{post.slug}" class="button">Read more</a>
    </Card>
  {/each}
</div>

<style>
  .inner {
    margin-top: calc(var(--size-extralarge) * -1);
    padding-bottom: var(--size-extralarge);
    background: url('../images/vader.png') no-repeat right bottom;
    display: grid;
    grid-auto-flow: row;
    grid-gap: var(--size-medium);
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
  }

  .button {
    margin: auto;
  }
</style>
