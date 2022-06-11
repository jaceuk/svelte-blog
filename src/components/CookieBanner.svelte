<script lang="ts">
  import { browser } from '$app/env';
  import { fly } from 'svelte/transition';
  import { sineOut } from 'svelte/easing';

  let cookieConsent = (browser && !!localStorage.getItem('cookieConsent')) || false;

  function handleAccept() {
    cookieConsent = true;
    browser && localStorage.setItem('cookieConsent', 'true');
  }
</script>

{#if browser && !cookieConsent}
  <div class="container" out:fly={{ y: -50, duration: 200, easing: sineOut }}>
    <div class="inner">
      <div>
        This website uses cookies for analytical purposes. By continuing to use this website you are indicating that you
        are happy with this.
      </div>

      <button class="button" on:click={handleAccept}>Accept</button>
    </div>
  </div>
{/if}

<style lang="scss">
  .container {
    background: var(--color-white-80);
    padding: var(--size-base) 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    box-shadow: 0px 3px 24px var(--color-nearly-black-20);

    @media (max-width: 767px) {
      padding: var(--size-base);
    }
  }

  .inner {
    display: flex;
    gap: var(--size-medium);
    z-index: 100;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  .button {
    @media (max-width: 767px) {
      width: 100%;
      justify-content: center;
    }
  }
</style>
