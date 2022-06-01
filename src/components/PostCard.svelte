<script lang="ts">
  import Card from '@components/Card.svelte';
  import PostMeta from '@components/PostMeta.svelte';

  export let post: any;
</script>

{#key post}
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
{/key}

<style type="scss">
  .button {
    margin: auto auto 0 auto;
  }
</style>
