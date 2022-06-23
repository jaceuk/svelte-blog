<script lang="ts">
  import MdChevronRight from 'svelte-icons/md/MdChevronRight.svelte';
  import MdChevronLeft from 'svelte-icons/md/MdChevronLeft.svelte';
  import { postsPerPage } from '@lib/stores';

  export let page: number;
  export let postCount: number;
  export let tag: string = '';

  const totalNumberOfPages = postCount / $postsPerPage;
  const folderPath: string = tag ? 'tag' : 'blog';
  const pagePath: string = tag ? tag : 'posts';
</script>

<div class="pagination">
  <a
    class="button"
    aria-disabled={page <= 1}
    aria-label="Next posts"
    href={page > 1 ? `/${folderPath}/${pagePath}?page=${page - 1}` : ''}><MdChevronLeft /></a
  >
  <a
    class="button"
    aria-disabled={page >= totalNumberOfPages}
    aria-label="Previous posts"
    href={page < totalNumberOfPages ? `/${folderPath}/${pagePath}?page=${page + 1}` : ''}><MdChevronRight /></a
  >
</div>

<style lang="scss">
  .pagination {
    display: flex;
    justify-content: center;
    gap: var(--size-large);
    padding-bottom: var(--size-medium);
  }

  a {
    height: 61px;

    &[aria-disabled='true'] {
      cursor: default;
      opacity: 0.2;
      pointer-events: none;

      &:hover {
        background-color: var(--color-white);
        color: var(--color-nearly-black);
      }
    }
  }
</style>
