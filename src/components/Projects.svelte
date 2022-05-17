<script lang="ts">
  import dogsToAdopt from '@data/dogsToAdopt.json';
  import dogsToAdoptImage from '@images/dogs-to-adopt.jpg';
  import ESOBuilder from '@data/ESOBuilder.json';
  import ESOBuilderImage from '@images/eso-builder.jpg';
  import EVOHomeServices from '@data/EVOHomeServices.json';
  import EVOHomeServicesImage from '@images/evo.jpg';
  import VIPDine from '@data/VIPDine.json';
  import VIPDineImage from '@images/vip-dine.jpg';
  import wakefieldSecurity from '@data/wakefieldSecurity.json';
  import wakefieldSecurityImage from '@images/wakefield.jpg';
  import projects from '@data/projects.json';
  import Project from '@components/Project.svelte';
</script>

<div class="container">
  <div class="inner">
    <div class="stack">
      <h2>{projects.title}</h2>
      {#each projects.text as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
    <Project data={dogsToAdopt} image={dogsToAdoptImage} />
    <Project data={VIPDine} image={VIPDineImage} />
    <Project data={ESOBuilder} image={ESOBuilderImage} />
    <Project data={EVOHomeServices} image={EVOHomeServicesImage} />
    <Project data={wakefieldSecurity} image={wakefieldSecurityImage} />
  </div>
</div>

<style lang="scss">
  .container {
    padding: var(--size-large) 0;
    background-color: var(--color-palegrey);
  }

  .inner {
    display: flex;
    gap: var(--size-large);
    flex-direction: column;
  }
</style>
