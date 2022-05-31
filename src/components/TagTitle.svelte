<script lang="ts">
  import { tag } from '@lib/stores.ts';

  let tagValue: string;

  tag.subscribe((value) => {
    tagValue = value;
  });
</script>

<div class="title">
  <h1>Blog posts tagged with '{tagValue}'</h1>
</div>

<style lang="scss">
  .title {
    color: var(--color-white);
    text-align: center;

    @media (max-width: 767px) {
      text-align: center;
    }
  }
</style>
