<script lang="ts">
  import Card from '@components/Card.svelte';
  import Pagination from '@components/Pagination.svelte';
  import PostMeta from '@components/PostMeta.svelte';

  export let posts: any;
  export let page: number;
  export let postCount: number;
  export let tag: string = '';
</script>

<div class="inner">
  <div class="grid">
    {#each posts as post}
      <article>
        <Card>
          <h2>
            {post.title}
          </h2>
          <PostMeta date={post.date} tags={post.tags} />
          <p>{post.excerpt}</p>
          <a href="/blog/{post.slug}" class="button">Read more</a>
        </Card>
      </article>
    {/each}
  </div>
  <Pagination {page} {postCount} {tag} />
</div>

<style type="scss">
  .inner {
    margin-top: calc(var(--size-extralarge) * -1);
    padding-bottom: var(--size-medium);
    background: url('../images/vader.png') no-repeat right bottom;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .grid {
    display: grid;
    grid-auto-flow: row;
    grid-gap: var(--size-medium);
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    padding-bottom: var(--size-large);
  }

  .button {
    margin: auto auto 0 auto;
  }
</style>
