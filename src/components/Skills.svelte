<script lang="ts">
  import MdCode from 'svelte-icons/md/MdCode.svelte';
  import MdBrush from 'svelte-icons/md/MdBrush.svelte';
  import FaRocket from 'svelte-icons/fa/FaRocket.svelte';
  import skills from '@data/skills.json';
  import developer from '@data/developer.json';
  import designer from '@data/designer.json';
  import geek from '@data/geek.json';
  import CardTitle from '@components/CardTitle.svelte';
  import Card from '@components/Card.svelte';
</script>

<div class="inner">
  <Card>
    <CardTitle text={developer.title} textSize="large">
      <MdCode slot="icon" />
    </CardTitle>

    <div class="row flex-start">
      <div class="stack">
        {#each developer.text as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
      <div class="tags">
        {#each skills.sort() as skill}
          <div class="tag">
            {skill}
          </div>
        {/each}
      </div>
    </div>
  </Card>

  <div class="narrowContainer">
    <div class="row">
      <Card>
        <CardTitle text={designer.title} textSize="small">
          <MdBrush slot="icon" />
        </CardTitle>
        <div class="row">
          {#each designer.text as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      </Card>

      <Card>
        <CardTitle text={geek.title} textSize="small">
          <FaRocket slot="icon" />
        </CardTitle>
        <div class="row">
          {#each geek.text as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      </Card>
    </div>
  </div>
</div>

<style lang="scss">
  .inner {
    margin-top: calc(var(--size-extra-large) * -1);
    padding-bottom: var(--size-extra-large);
    background: url('../images/vader.png') no-repeat right bottom;
    display: flex;
    gap: var(--size-medium);
    flex-direction: column;
  }

  .narrowContainer {
    padding: 0 var(--size-extra-large);

    @media (max-width: 767px) {
      padding: 0;
    }
  }
</style>
