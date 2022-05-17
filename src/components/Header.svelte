<script lang="ts">
  import AnimatedBackground from '@components/AnimatedBackground.svelte';
</script>

<header>
  <div class="inner"><slot class="title" /></div>
  <AnimatedBackground />
</header>

<style lang="scss">
  header {
    position: relative;
    z-index: -1;
  }

  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
    padding-top: 19.2rem;
    padding-bottom: 25.6rem;
  }
</style>
