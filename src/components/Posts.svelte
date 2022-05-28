<script lang="ts">
  import Card from '@components/Card.svelte';
</script>

<div class="inner">
  {#each [...Array(10)] as post}
    <Card>
      <h2>Blog post title</h2>
      <p>
        Almost immediately there was an uptick in enquiries from the websites and a few months later the monthly website
        enquiries had increased by approximately 9,000 percent (no, that's not a typo!).
      </p>
      <a href="/post" class="button">Read more</a>
    </Card>
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
  }

  .button {
    margin: auto;
  }
</style>
