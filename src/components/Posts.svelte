<script lang="ts">
  import Pagination from '@components/Pagination.svelte';
  import PostCard from '@components/PostCard.svelte';

  export let posts: any;
  export let page: number;
  export let postCount: number;
  export let tag: string = '';
</script>

<div class="inner">
  <div class="grid">
    {#each posts as post}
      <PostCard {post} />
    {/each}
  </div>
  <Pagination {page} {postCount} {tag} />
</div>

<style type="scss">
  .inner {
    margin-top: calc(var(--size-extra-large) * -1);
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
</style>
