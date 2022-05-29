<script lang="ts">
  import MdOpenInNew from 'svelte-icons/md/MdOpenInNew.svelte';
  import MdKeyboardArrowUp from 'svelte-icons/md/MdKeyboardArrowUp.svelte';
  import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';
  import Lighthouse from '@components/Lighthouse.svelte';
  import Modal from '@components/Modal.svelte';
  import Card from '@components/Card.svelte';

  interface IData {
    title: string;
    type: string;
    intro: string;
    text: string;
    tags: string[];
    lighthouseScores: string[];
    image: string;
    features: IFeature[];
  }

  interface IFeature {
    title: string;
    text: string;
  }

  export let data: IData;
  export let image: string;

  let showModal = false;
  let infoVisible = false;
  let more: any;

  function handleToggleModal() {
    showModal = !showModal;
  }

  function handleMoreClick() {
    infoVisible = !infoVisible;
    more.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<div bind:this={more}>
  <Card>
    <div class="stack large">
      <div class="row">
        <button class="imageContainer" on:click={handleToggleModal} style=" background-image: url({image})">
          <span class="icon">
            <MdOpenInNew />
          </span>
          <span class="accessibleText">See screenshot for {data.title}</span>
        </button>

        <div>
          <div class="text">
            <div class="stack medium">
              <div>
                <div class="type">{data.type}</div>
                <h2>{data.title}</h2>
              </div>
              <p>{data.intro}</p>
              <div class="box justify-center">
                <button class="button" on:click={handleMoreClick}>
                  {#if infoVisible}
                    See less <span class="accessibleText">about {data.title}</span>
                    <span class="icon">
                      <MdKeyboardArrowUp />
                    </span>
                  {:else}
                    See more <span class="accessibleText">about {data.title}</span>
                    <span class="icon">
                      <MdKeyboardArrowDown />
                    </span>
                  {/if}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {#if infoVisible}
        <div class="moreInfo">
          <div class="stack large">
            <Card>
              <h3>Project overview</h3>
              <div class="row flex-start">
                <div class="stack">
                  {#each data.text as paragraph}
                    <p>{paragraph}</p>
                  {/each}
                </div>
                <div class="tags">
                  {#each data.tags.sort() as tag}
                    <div class="tag">
                      {tag}
                    </div>
                  {/each}
                </div>
              </div>
            </Card>

            {#if data.lighthouseScores}
              <Lighthouse scores={data.lighthouseScores} />
            {/if}

            {#if data.features}
              <div class="row">
                {#each data.features as feature}
                  <div class="feature">
                    <h3>{feature.title}</h3>
                    {#if feature.text}
                      {#each feature.text as paragraph}
                        <p>{paragraph}</p>
                      {/each}
                    {/if}
                  </div>
                {/each}
              </div>
            {/if}
          </div>
        </div>
      {/if}
    </div>
  </Card>

  {#if showModal}
    <Modal image={data.image} on:close={handleToggleModal} />
  {/if}
</div>

<style lang="scss">
  .text {
    padding: var(--size-large) var(--size-medium);

    @media (max-width: 767px) {
      padding: var(--size-base) 0;
    }
  }

  .type {
    text-transform: uppercase;
    font-size: var(--font-size-small);
  }

  .feature {
    border-radius: var(--border-radius-large);
    display: flex;
    flex-direction: column;
    gap: var(--size-medium);
    padding: var(--size-medium);
    flex-basis: calc(50% - var(--size-medium) / 2);
    background-color: var(--color-palegrey);

    @media (max-width: 767px) {
      padding: var(--size-base);
      border-radius: var(--border-radius-medium);
    }

    > * {
      max-width: 58rem;
    }
  }

  .moreInfo {
    animation: ZoomIn 1s ease-in-out;

    @keyframes ZoomIn {
      0% {
        opacity: 0;
        max-height: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 1;
        max-height: 10000px;
      }
    }
  }

  .icon {
    display: inline-block;
    height: 24px;
    width: 24px;
  }

  .imageContainer {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left top;
    background-color: var(--color-palegrey);
    border-radius: var(--border-radius-medium);
    overflow: hidden;
    position: relative;
    min-height: 200px;
    flex-grow: 2;
    border: none;
    padding: 0;
    cursor: pointer;

    @media (max-width: 767px) {
      border-radius: var(--border-radius-medium);
      flex-grow: 1;
    }

    span {
      display: none;

      @media (min-width: 767px) {
        position: absolute;
        bottom: var(--size-base);
        right: var(--size-base);
        z-index: 1;
        border-radius: var(--border-radius-max);
        padding: var(--size-base);
        height: 58px;
        width: 58px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-white);
        box-shadow: 0px 4px 4px var(--color-nearlyblack20);
        border: 1px solid var(--color-nearlyblack);
        transition: all 0.2s ease-in-out;
      }
    }
  }
</style>
