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

<div class="inner">
  <div class="pagination">
    {totalNumberOfPages}
    <a class="button" href={page > 1 ? `/${folderPath}/${pagePath}?page=${page - 1}` : ''}><MdChevronLeft /></a>
    <a class="button" href={page < totalNumberOfPages ? `/${folderPath}/${pagePath}?page=${page + 1}` : ''}
      ><MdChevronRight /></a
    >
  </div>
</div>

<style lang="scss">
  .pagination {
    display: flex;
    justify-content: center;
    gap: var(--size-large);
    padding-bottom: var(--size-medium);
  }

  .button {
    height: 61px;
  }
</style>
