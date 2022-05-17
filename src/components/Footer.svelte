<script lang="ts">
  import AnimatedBackground from '@components/AnimatedBackground.svelte';
</script>

<footer>
  <div class="inner">© 2022 Jason Newington</div>
  <AnimatedBackground />
</footer>

<style lang="scss">
  footer {
    position: relative;
    z-index: -1;
    color: var(--color-white);
    text-align: center;
    padding: var(--size-large) 0;
  }
</style>
