<script lang="ts">
</script>

<div class="overlay"><slot /></div>

<style lang="scss">
  .overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    background: var(--color-nearlyblack80);
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: mmfadeIn 0.4s ease-in-out;

    @keyframes mmfadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }
</style>
