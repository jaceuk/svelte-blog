<script lang="ts">
  import Card from '@components/Card.svelte';
  import PostMeta from '@components/PostMeta.svelte';

  export let posts: any;
</script>

<div class="inner">
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

<style type="scss">
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
