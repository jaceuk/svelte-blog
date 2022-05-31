<script lang="ts">
  import { formatForURL } from '@lib/utils/tags';

  export let date: string;
  export let tags: string[];

  function formatDate(date: string) {
    const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateObject = new Date(date).toLocaleDateString('en-us', options);
    const formattedDate = dateObject;

    return formattedDate;
  }
</script>

<div class="post-meta">
  {formatDate(date)}
  {#if tags}
    in
    {#each tags.sort() as tag, i}
      <a href={`/tag/${formatForURL(tag)}`}>
        {tag}
      </a>
      {#if i < tags.length - 1}
        <span>, </span>
      {/if}
    {/each}
  {/if}
</div>
